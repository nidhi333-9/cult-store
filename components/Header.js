import { HiOutlineShoppingCart } from "react-icons/hi";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/cartSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <nav className="flex h-16 justify-between items-center shadow-md px-5 ">
        <p
          onClick={() => router.push("/")}
          className="text-xl px-5 font-bold text-blue-500 cursor-pointer"
        >
          Cult Store
        </p>

        {/* <div className="hidden sm:flex h-10 justify-between items-center bg-blue-500 hover:bg-blue-600 rounded-md flex-grow">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md"
          />
          <HiOutlineSearch className="text-2xl text-white" />
        </div> */}
        <div className="relative flex justify-between items-center hover:cursor-pointer">
          <div onClick={!session ? signIn : signOut}>
            <p className="p-3 text-lg text-slate-600">
              {session ? `${session.user.name}` : "Login"}
            </p>
          </div>

          <div
            className="p-3 flex hover:cursor-pointer"
            onClick={() => router.push("/checkout")}
          >
            <HiOutlineShoppingCart className="text-2xl text-slate-600" />

            <span className="absolute top-0 right-0  items-center flex justify-center bg-blue-500 rounded-full h-5 w-5 text-white font-bold">
              {items.length}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
