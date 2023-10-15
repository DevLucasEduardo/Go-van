"use client";

import SearchBar from "../components/search-bar";
import Card from "../components/card";
import React, { useEffect, useState } from "react";

interface Vehicle {
  name: string;
  type: string;
  destiny: string;
}
export default function SignIn() {
  const vans: Vehicle[] = [
    { name: "Transporte Expresso", type: "van", destiny: "São Paulo" },
    { name: "Rápido Transporte", type: "ônibus", destiny: "Rio de Janeiro" },
    { name: "Moto Veloz", type: "moto", destiny: "Curitiba" },
    { name: "Carro Confortável", type: "carro", destiny: "Belo Horizonte" },
    { name: "Transporte de Carga", type: "caminhão", destiny: "Porto Alegre" },
    { name: "Micro-Ônibus Ágil", type: "micro-ônibus", destiny: "Brasília" },
    { name: "Transporte Escolar Seguro", type: "van", destiny: "Natal" },
    { name: "Táxi Rápido", type: "táxi", destiny: "Salvador" },
    { name: "Carro de Luxo", type: "carro", destiny: "Recife" },
    { name: "Ônibus Turístico", type: "ônibus", destiny: "Fortaleza" },
  ];

  const [filteredCards, setFilteredCards] = useState(vans);
  const [searchBarInfo, setSearchBarInfo] = useState("");
  const noVehiclesFound = "Nenhum veículo encontrado!";

  const receiveSearchBarInfo = (data: string) => {
    setSearchBarInfo(data.toLowerCase());
  };

  useEffect(() => {
    if (searchBarInfo === "") {
      setFilteredCards(vans);
      return;
    }
    setFilteredCards(
      vans.filter((van) => van.destiny.toLowerCase() === searchBarInfo)
    );
  }, [searchBarInfo]);

  return (
    <div>
      <SearchBar
        placeholder="Filtrar por destino..."
        sendSearchBarInfo={receiveSearchBarInfo}
      />

      {filteredCards.length === 0 && (
        <p className="text-center pt-10 pb-32"> {noVehiclesFound} </p>
      )}

      <div className="flex max-w-screen-xl mx-auto mt-20 flex-wrap justify-center">
        {filteredCards.map((van, index) => (
          <div className="my-5 mr-5" key={index}>
            <Card name={van.name} type={van.type} destiny={van.destiny} />
          </div>
        ))}
      </div>
    </div>
  );
}
