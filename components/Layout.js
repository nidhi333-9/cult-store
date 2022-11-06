import React from "react";
import Head from "next/head";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Footer from "./Footer";
function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - Cult-Store" : "Cult-Store"}</title>
        <meta
          name="description"
          content="E-commerce Website"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-16 justify-between items-center shadow-md px-5">
            <Link
              href="/"
              legacyBehavior
            >
              <a className="text-xl font-bold text-blue-500">Cult Store</a>
            </Link>
            <div className="flex justify-between items-center">
              <Link
                href="/cart"
                legacyBehavior
              >
                <a className="p-3">
                  <HiOutlineShoppingCart className="text-2xl text-slate-600" />
                </a>
              </Link>
              <Link
                href="/login"
                legacyBehavior
              >
                <a className="p-3 text-lg text-slate-600">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-5 px-5">{children}</main>
        <footer className="bg-gray-900 shadow-inner">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default Layout;
