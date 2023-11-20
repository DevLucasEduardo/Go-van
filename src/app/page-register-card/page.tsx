"use client";

import Form from "../components/form";
import { useState } from "react";

import axios from "axios";
import Header from "../components/header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export default function Register() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formData, setFormData] = useState({
    vehicle: "",
    licensePlate: "",
    departureLocation: "",
    destination: "",
    availableSeats: "",
    departureDate: "",
    departureTime: "",
    accessibility: false,
  });

  const notify = () => {
    toast.success("Viagem registrada!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleChange = (event: any) => {
    setIsEmpty(false);
    let { name, value } = event.target;

    if (name === "accessibility") {
      if (value === "sim") {
        value = true;
      } else if (value === "nao") {
        value = false;
      }
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleClick = (event: any) => {
    let allValuesNotEmpty = Object.values(formData).every(
      (value) => value !== ""
    );
    const { name, value } = event.target;

    if (name === "accessibility" && value === "") {
      allValuesNotEmpty = false;
    }

    if (!allValuesNotEmpty) {
      setIsEmpty(true);
      return;
    }
    const result = postData(formData, "cards/");
    notify();
    clearFields();
  };

  const postData = async (data: {}, endpoint: string) => {
    const API_URL = `http://localhost:8080/${endpoint}`;
    try {
      const request = await axios.post(API_URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  const clearFields = () => {
    setFormData({
      vehicle: "",
      licensePlate: "",
      departureLocation: "",
      destination: "",
      availableSeats: "",
      departureDate: "",
      departureTime: "",
      accessibility: false,
    });
  };

  return (
    <>
      <Header logOut={true} />

      <h1 className="text-center bold text-3xl">Registrar viagem</h1>
      <div className="max-w-3xl mx-auto">
        <form className="gap-4 flex flex-wrap justify-between py-10">
          <Form
            type="text"
            id="1"
            name="vehicle"
            label="Veículo"
            value={formData.vehicle}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="2"
            name="licensePlate"
            label="Placa"
            value={formData.licensePlate}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="3"
            name="departureLocation"
            label="Local de partida"
            value={formData.departureLocation}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="4"
            name="destination"
            label="Destino"
            value={formData.destination}
            onChange={handleChange}
          />
          <Form
            type="date"
            id="6"
            name="departureDate"
            label="Data de partida"
            value={formData.departureDate}
            onChange={handleChange}
          />
          <Form
            type="time"
            id="7"
            name="departureTime"
            label="Hora de partida"
            value={formData.departureTime}
            onChange={handleChange}
          />
          <Form
            type="text"
            id="5"
            name="availableSeats"
            label="Assentos disponíveis"
            value={formData.availableSeats}
            onChange={handleChange}
          />

          <div className="flex flex-col w-80">
            <label htmlFor="accessibility">Acessibilidade</label>
            <select
              name="accessibility"
              id="8"
              className="h-10 w-20 mt-2 border rounded focus:outline-none focus:border-sky-500 focus:ring-1 px-2"
              onChange={handleChange}
            >
              <option value=""></option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
        </form>

        {isEmpty && (
          <div className="flex justify-center pb-5">
            <p className="text-red-600">Há campos não preenchidos.</p>
          </div>
        )}
        <div className="flex justify-center mb-10 self-end">
          <button
            onClick={handleClick}
            className="bg-slate-900  text-white py-4 px-10 rounded-md"
          >
            Registrar
          </button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </>
  );
}
