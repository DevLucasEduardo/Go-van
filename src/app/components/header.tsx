"use client";
import Link from "next/link";
import Button from "./button";
import { useState, useEffect } from "react";

interface IButton {
  button?: boolean;
  logOut?: boolean;
}

const Header = (props: IButton) => {
  const [href, setHref] = useState("/page-login");

  useEffect(() => {
    if (sessionStorage.getItem("isLogged") === "true") {
      setHref("/page-register-card");
    }
  }, []);

  const handleClick = () => {
    sessionStorage.setItem("isLogged", "");
    sessionStorage.setItem("userName", "");
  };
  return (
    <header className="">
      <div className="max-w-6xl mx-auto flex justify-between items-center mt-2 mb-20">
        <Link href="/" className="my-2 text-5xl font-bold">
          GoVan
        </Link>
        {props.button && <Button label="Login" href={href} px="px-10" />}
        {props.logOut && (
          <div className="flex items-center">
            <p className="mr-4">
              Bem-vindo, {sessionStorage.getItem("userName")}!
            </p>
            <Button href={"/"} px="px-5" label="Sair" onClick={handleClick} />
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
