import Link from "next/link";
import { HiOutlineShoppingCart, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
  return (
    <header className="sticky">
      <nav className="flex h-16 justify-between items-center shadow-md px-5 ">
        <Link
          href="/"
          legacyBehavior
        >
          <a className="text-xl px-5 font-bold text-blue-500 cursor-pointer">
            Cult Store
          </a>
        </Link>
        <div className="hidden sm:flex h-10 justify-between items-center bg-blue-500 hover:bg-blue-600 rounded-md flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
          />
          <HiOutlineSearch className="text-2xl text-white" />
        </div>
        <div className="relative flex justify-between items-center">
          <Link
            href="/login"
            legacyBehavior
          >
            <a className="p-3 text-lg text-slate-600">Login</a>
          </Link>
          <Link
            href="/cart"
            legacyBehavior
          >
            <a className="p-3 flex">
              <HiOutlineShoppingCart className="text-2xl text-slate-600" />
              <span className="absolute top-0 right-0  items-center flex justify-center bg-blue-500 rounded-full h-5 w-5 text-white font-bold">
                0
              </span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
