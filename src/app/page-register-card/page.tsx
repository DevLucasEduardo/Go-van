"use client";

import Form from "../components/form";
import { useState } from "react";

import axios from "axios";

export default function Register() {
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

  const handleChange = (event: any) => {
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

  const handleClick = () => {
    const result = postData(formData, "cards/post");
    window.alert("Viagem registrada");
  };

  const postData = async (data: {}, endpoint: string) => {
    const API_URL = `http://localhost:8080/${endpoint}`;
    try {
      const request = await axios.post(API_URL, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center bold text-3xl">Registrar viagem</h1>
      <div className="max-w-3xl mx-auto">
        <form className="gap-4 flex flex-wrap justify-between pb-10 pt-10">
          <Form
            type="text"
            id="1"
            name="vehicle"
            label="Veículo"
            onChange={handleChange}
          />
          <Form
            type="text"
            id="2"
            name="licensePlate"
            label="Placa"
            onChange={handleChange}
          />
          <Form
            type="text"
            id="3"
            name="departureLocation"
            label="Local de partida"
            onChange={handleChange}
          />
          <Form
            type="text"
            id="4"
            name="destination"
            label="Destino"
            onChange={handleChange}
          />
          <Form
            type="date"
            id="6"
            name="departureDate"
            label="Data de partida"
            onChange={handleChange}
          />
          <Form
            type="time"
            id="7"
            name="departureTime"
            label="Hora de partida"
            onChange={handleChange}
          />
          <Form
            type="text"
            id="5"
            name="availableSeats"
            label="Assentos disponíveis"
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
        <div className="flex justify-center mb-10 self-end">
          <button
            onClick={handleClick}
            className="bg-slate-900  text-white py-4 px-10 rounded-md"
          >
            Registrar
          </button>
        </div>
      </div>
    </>
  );
}
