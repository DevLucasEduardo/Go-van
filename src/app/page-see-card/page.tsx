import React from "react";
import CardData from "../interface/CardData";

export default function SeeCard({
  searchParams,
}: {
  searchParams: {
    vehicle: string;
    licensePlate: string;
    departureLocation: string;
    destination: string;
    availableSeats: number;
    departureDate: string;
    departureTime: string;
    accessibility: boolean;
  };
}) {
  return (
    <>
      <div className="max-w-2xl mx-auto h-64 rounded-2xl bg-slate-200 flex flex-col justify-center">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-bold text-sm">{searchParams.vehicle}</h1>
          <ul className="gap-2 text-sm">
            <li>Placa do veículo: {searchParams.licensePlate}</li>
            <li>Local de partida: {searchParams.departureLocation}</li>
            <li>Destino: {searchParams.destination}</li>
            <li>Assentos disponíveis: {searchParams.availableSeats}</li>
            <li>Data de partida: {searchParams.departureDate}</li>
            <li>Horário de partida: {searchParams.departureTime}</li>
            <li>Acessibilidade: {searchParams.accessibility}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
