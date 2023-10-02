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
    { name: "AdriTransportes", type: "van", destiny: "São Paulo" },
    { name: "DiTransportes", type: "ônibus", destiny: "Rio de Janeiro" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "CiTransportes", type: "carro", destiny: "Porto Alegre" },
    { name: "TriTransportes", type: "caminhão", destiny: "São Paulo" },
    { name: "TriTransportes", type: "caminhão", destiny: "São Paulo" },
    { name: "AdriTransportes", type: "van", destiny: "São Paulo" },
    { name: "DiTransportes", type: "ônibus", destiny: "Rio de Janeiro" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "AdriTransportes", type: "van", destiny: "São Paulo" },
    { name: "DiTransportes", type: "ônibus", destiny: "Rio de Janeiro" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "CiTransportes", type: "carro", destiny: "Porto Alegre" },
    { name: "TriTransportes", type: "caminhão", destiny: "São Paulo" },
    { name: "TriTransportes", type: "caminhão", destiny: "São Paulo" },
    { name: "AdriTransportes", type: "van", destiny: "São Paulo" },
    { name: "DiTransportes", type: "ônibus", destiny: "Rio de Janeiro" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
    { name: "RiTransportes", type: "van", destiny: "Ubatuba" },
  ];

  const [filteredCards, setFilteredCards] = useState(vans);
  const [searchBarInfo, setSearchBarInfo] = useState("");
  const noVehiclesFound = "Nenhum veículo encontrado!";

  const receiveSearchBarInfo = (data: string) => {
    setSearchBarInfo(data);
  };

  useEffect(() => {
    if (searchBarInfo === "") {
      setFilteredCards(vans);
      return;
    }
    setFilteredCards(vans.filter((van) => van.destiny === searchBarInfo));
  }, [searchBarInfo]);

  return (
    <div>
      <SearchBar
        placeholder="Filtrar por destino..."
        sendSearchBarInfo={receiveSearchBarInfo}
      />
      <p className="text-center pt-10">
        {filteredCards.length === 0 && noVehiclesFound}
      </p>
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
