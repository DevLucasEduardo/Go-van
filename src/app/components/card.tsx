import React, { useState } from "react";
import CardData from "../interface/CardData";
import Link from "next/link";

const Card = (props: CardData) => {
  let accessibility = "";
  if (props.accessibility === true) {
    accessibility = "Sim";
  } else if (props.accessibility === false) {
    accessibility = "Não";
  }
  return (
    <>
      <Link
        href={{
          pathname: "/page-see-card",
          query: {
            vehicle: props.vehicle,
            licensePlate: props.licensePlate,
            departureLocation: props.departureLocation,
            destination: props.destination,
            availableSeats: props.availableSeats,
            departureDate: props.departureDate,
            departureTime: props.departureTime,
            accessibility: accessibility,
          },
        }}
      >
        <div className="border h-72 px-16 rounded-2xl flex items-center justify-center bg-slate-200">
          <div className="flex flex-col gap-2 text-center w-40">
            <h1 className="font-bold text-sm">{props.vehicle}</h1>
            <ul className="gap-2 text-sm">
              <li>Local de partida: {props.departureLocation}</li>
              <li>Destino: {props.destination}</li>
            </ul>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
