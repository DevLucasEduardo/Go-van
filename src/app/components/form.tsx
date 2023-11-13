"use client";

import React from "react";

interface Input {
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = (props: Input) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="pb-2">
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        className="w-80 h-10 border rounded focus:outline-none focus:border-sky-500 focus:ring-1 px-2"
      />
    </div>
  );
};

export default Form;
