import React from "react";
import Link from "next/link";

interface Info {
  label: string;
  href: string;
}

const Button = (props: Info) => {
  return (
    <Link
      className="bg-gradient-to-r from-gray-800 to-sky-900 ... rounded-md p-6 text-white"
      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default Button;
