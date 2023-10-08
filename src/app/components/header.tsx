import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-t from-gray-800 to-sky-900 flex text-white justify-between items-center">
      <Link href="/" className="m-8 text-5xl font-bold">
        VanGo
      </Link>
      <nav className="m-8">
        <ul>
          <Link href="/sign">Login</Link>
        </ul>
      </nav>
    </header>
  );
}
