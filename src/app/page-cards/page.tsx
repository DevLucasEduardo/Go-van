"use client";

import CardData from "../interface/CardData";
import SearchBar from "../components/search-bar";
import Card from "../components/card";
import React, { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import Header from "../components/header";

export default function Cards() {
  const [data, loading, error] = useFetchData("/cards/");

  const vans = data as CardData[];

  useEffect(() => {
    setFilteredCards(vans);
  }, [vans]);

  // Filtered cards received by the API or when something is searched
  const [filteredCards, setFilteredCards] = useState(vans);

  // State for getting info from the search bar component
  const [searchBarInfo, setSearchBarInfo] = useState("");

  // Message
  const noVehiclesFound = "Nenhum veículo encontrado!";

  // Function for getting the info from the search bar
  const receiveSearchBarInfo = (data: string) => {
    setSearchBarInfo(data.toLowerCase());
  };

  // Reading cards when the page is loaded or something is searched
  useEffect(() => {
    if (searchBarInfo === "") {
      setFilteredCards(vans);
      return;
    }
    setFilteredCards(
      vans.filter((van) => van.destination.toLowerCase() === searchBarInfo)
    );
  }, [searchBarInfo]);

  return (
    <>
      <Header button={true} />
      <SearchBar
        placeholder="Filtrar por destino..."
        sendSearchBarInfo={receiveSearchBarInfo}
      />

      {filteredCards.length === 0 && (
        <p className="text-center pt-10 pb-44"> {noVehiclesFound} </p>
      )}

      <div className="flex max-w-screen-xl mx-auto mt-20 flex-wrap justify-center">
        {filteredCards.map((van, index) => (
          <div className="m-2" key={index}>
            <Card
              vehicle={van.vehicle}
              departureLocation={van.departureLocation}
              destination={van.destination}
              departureDate={van.departureDate}
              departureTime={van.departureTime}
              licensePlate={van.licensePlate}
              availableSeats={van.availableSeats}
              accessibility={van.accessibility}
            />
          </div>
        ))}
      </div>
    </>
  );
}
