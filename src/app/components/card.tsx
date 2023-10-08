import React from "react";

interface Vehicle {
  name: string;
  type: string;
  destiny: string;
}

const Card = (props: Vehicle) => {
  return (
    <button className="border h-64 px-14 rounded-md flex-1">
      <div className=" flex flex-col gap-2">
        <h1 className="font-bold w-36">{props.name}</h1>
        <ul className="gap-2 flex flex-col">
          <li>{props.type}</li>
          <li>{props.destiny}</li>
        </ul>
      </div>
    </button>
  );
};

export default Card;
