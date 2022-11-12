/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import WomenImage from "../public/images/cloth.jpg";
import MenImage from "../public/images/clothes.jpg";
import Jewellery from "../public/images/accesories.jpg";
import Image from "next/image";

const Content = () => {
  return (
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="card relative hover:cursor-pointer">
        <Link
          href="/men"
          legacyBehavior
        >
          <div>
            <Image
              src={WomenImage}
              alt="women-img"
              width={400}
              height={300}
            ></Image>

            <div className="absolute inset-0 bg-gray-400 bg-opacity-50 ">
              <h1 className="flex justify-center items-center pt-28 md:pt-20 text-5xl text-slate-800 leading-loose hover:text-blue-600">
                Women
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="card relative hover:cursor-pointer">
        <Link
          href="/men"
          legacyBehavior
        >
          <div>
            <Image
              src={MenImage}
              alt="women-img"
              width={400}
              height={300}
            ></Image>

            <div className="absolute inset-0 bg-gray-400 bg-opacity-50 ">
              <h1 className="flex justify-center items-center pt-28 md:pt-20 text-5xl text-slate-800 leading-loose hover:text-blue-600">
                Men
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <div className="card relative hover:cursor-pointer">
        <Link
          href="/men"
          legacyBehavior
        >
          <div>
            <Image
              src={Jewellery}
              alt="women-img"
              width={400}
              height={300}
            ></Image>

            <div className="absolute inset-0 bg-gray-400 bg-opacity-50 ">
              <h1 className="flex justify-center items-center pt-28 md:pt-20 text-5xl text-slate-800 leading-loose hover:text-blue-600">
                Jewellery
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Content;
