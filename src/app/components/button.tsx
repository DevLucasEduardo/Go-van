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
      className={`bg-slate-900 rounded-3xl text-white py-4 ${props.px}`}
      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default Button;
