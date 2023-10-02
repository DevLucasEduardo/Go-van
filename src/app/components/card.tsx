import React from "react";

interface Vehicle {
  name: string;
  type: string;
  destiny: string;
}

const Card = (props: Vehicle) => {
  return (
    <div className="border p-10 rounded-md flex-1">
      <div className=" flex flex-col ">
        <h1 className="font-bold w-36">{props.name}</h1>
        <ul>
          <li>{props.type}</li>
          <li>{props.destiny}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
