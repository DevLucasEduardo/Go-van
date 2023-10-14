import Link from "next/link";
import Button from "./link";
export default function Header() {
  return (
    <header className="bg-zinc-200 to-sky-900">
      <div className="max-w-5xl mx-auto flex text-white justify-between items-center">
        <Link href="/" className="my-6 text-5xl font-bold">
          VanGo
        </Link>
        <nav>
          <ul>
            <Button label="Login" href="/sign" px="px-10" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
