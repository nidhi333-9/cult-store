import React from "react";
import Head from "next/head";
import Link from "next/link";
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
          <nav className="flex h-12 justify-between items-center shadow-md px-5">
            <Link
              href="/"
              legacyBehavior
            >
              <a className="text-lg font-bold">Cult Store</a>
            </Link>
            <div>
              <Link
                href="/cart"
                legacyBehavior
              >
                <a className="p-3">Cart</a>
              </Link>
              <Link
                href="/login"
                legacyBehavior
              >
                <a className="p-3">Login</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-5 px-5">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          footer
        </footer>
      </div>
    </>
  );
}

export default Layout;
