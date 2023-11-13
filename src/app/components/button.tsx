import React from "react";
import Link from "next/link";

interface Info {
  label: string;
  href: string;
  px: string;
  onClick?: () => void;
}

const Button = (props: Info) => {
  return (
    <Link
      onClick={props.onClick}
      className={`bg-slate-900  text-white py-4 ${props.px} rounded-md`}
      href={props.href}
    >
      {props.label}
    </Link>
  );
};

export default Button;
