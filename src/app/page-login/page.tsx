"use client";

import React, { useState, useEffect } from "react";

import axios from "axios";
import Button from "../components/button";
import Header from "../components/header";
import Form from "../components/form";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoginWrong, setIsLoginWrong] = useState(false);
  const [href, setHref] = useState("");

  const handleChange = (event: any) => {
    setIsEmpty(false);
    setIsLoginWrong(false);
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const postLoginAuthentication = async () => {
    const API_URL = "http://localhost:8080/login/";
    const sendDataJson = JSON.stringify(formData);

    const allValuesNotEmpty = Object.values(formData).every(
      (value) => value !== ""
    );
    if (!allValuesNotEmpty) {
      setIsEmpty(true);
      return;
    }

    try {
      const response = await axios.post(API_URL, sendDataJson, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setHref("/page-register-card");
      setIsLoginWrong(false);
      sessionStorage.setItem("isLogged", "true");
      sessionStorage.setItem("userName", response.data.userName);
    } catch (error) {
      console.log(error);
      setIsLoginWrong(true);
    }
  };

  return (
    <>
      <Header />
      <h1 className="text-center bold text-3xl">Entrar</h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 px-10 pt-10">
          <Form
            type="email"
            id="1"
            name="email"
            label="E-mail"
            onChange={handleChange}
          />
          <Form
            type="password"
            id="2"
            name="password"
            label="Senha"
            onChange={handleChange}
          />
          <p className="flex justify-center">
            Não possui login?{" "}
            <Link
              href={"page-sign-up"}
              className="text-blue-600 hover:underline pl-1"
            >
              Registre-se
            </Link>
          </p>
          <div className="flex justify-center">
            {isEmpty && (
              <p className="text-red-600">Há dados sem preenchimento.</p>
            )}
            {isLoginWrong && (
              <p className="text-red-600">E-mail ou senha incorretos.</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          label="Entrar"
          href={href}
          px="px-10"
          onClick={postLoginAuthentication}
        />
      </div>
    </>
  );
}
