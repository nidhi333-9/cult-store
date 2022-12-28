import React from "react";

import { useRouter } from "next/router";

const Footer = () => {
  // const year = document.getElementById("year");
  // const thisYear = new Date().getFullYear();
  // year.setAttribute("datatime", thisYear);
  // year.textContent = thisYear;
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center p-14 bg-slate-700">
        <p
          onClick={() => router.push("/")}
          className="text-3xl font-bold text-blue-500 cursor-pointer"
        >
          Cult Store
        </p>

        <p className="text-gray-300 py-3">
          Copyright &copy; <span id="year">2022</span> Cult Store
        </p>

        <ul className="flex space-x-3 text-gray-100 underline py-2 cursor-pointer">
          <li>Legal Stuff </li>
          <span className="text-gray-300"> | </span> <li>Privacy Policy </li>
          <span className="text-gray-300"> | </span> <li>Security</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
