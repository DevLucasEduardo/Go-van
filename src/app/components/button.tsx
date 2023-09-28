import React from "react";

interface Info {
  label: string;
}

const Button = (props: Info) => {
  return (
    <button className="bg-blue-500 rounded-sm text-white	p-1.5 m-1.5">
      {props.label}
    </button>
  );
};

export default Button;
