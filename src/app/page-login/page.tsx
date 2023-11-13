"use client";

import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import Link from "next/link";

export default function Find() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isEmpty, setIsEmpty] = useState(false);
  const [href, setHref] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: event.target.value });
    setIsEmpty(false);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: event.target.value });
    setIsEmpty(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const allValuesNotEmpty = Object.values(formData).every(
      (value) => value !== ""
    );
    if (allValuesNotEmpty) {
      getLoginAuthentication();
    } else {
      setIsEmpty(true);
    }
  };

  const getLoginAuthentication = async () => {
    const API_URL = "http://localhost:8080/login/";
    const sendDataJson = JSON.stringify(formData);
    try {
      const response = await axios.post(API_URL, sendDataJson, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data === "Successfully logged") {
        console.log(response.data);
        setHref("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-center bold text-3xl">Entrar</h1>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 px-10 pt-10">
          <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="1"
              name="email"
              onChange={handleEmail}
              className="input"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="2"
              name="password"
              onChange={handlePassword}
              className="input"
            />
            {isEmpty && (
              <p className="text-red-600">Há dados sem preenchimento</p>
            )}
            <button type="submit">testando</button>
          </form>
        </div>
      </div>
    </>
  );
}
