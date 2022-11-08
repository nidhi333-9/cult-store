/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Content = ({ item }) => {
  return (
    <div className="card relative">
      <div className="">
        <Link
          href="/men"
          legacyBehavior
        >
          <a>
            <img
              src={item.image}
              alt={item.name}
              className="rounded shadow  inset-0 object-cover"
            />
          </a>
        </Link>
        <div className="absolute inset-0 bg-gray-400 bg-opacity-50 ">
          <h1 className="flex justify-center items-center pt-28 md:pt-20 text-5xl text-slate-800 leading-loose hover:text-blue-600">
            {item.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Content;
