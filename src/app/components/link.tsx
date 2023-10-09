import React from "react";
import Link from "next/link";

interface Info {
  label: string;
  href: string;
  px: string;
}

const Button = (props: Info) => {
  return (
    <Link
      className={`bg-gradient-to-t from-gray-800 to-sky-900 rounded text-white py-4 ${props.px}`}
      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default Button;
