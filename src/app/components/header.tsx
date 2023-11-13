import Link from "next/link";
import Button from "./button";
export default function Header() {
  return (
    <header className="">
      <div className="max-w-6xl mx-auto flex  justify-between items-center">
        <Link href="/" className="my-2 text-5xl font-bold">
          GoVan
        </Link>
        <nav>
          <ul>
            <Button label="Login" href="/page-login" px="px-10" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
