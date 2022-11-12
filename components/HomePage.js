import React from "react";
import Image from "next/image";
import HeroImage from "../public/images/modelOne.png";
// import Products from "./Products";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="w-fit pb-14">
        <div className="flex h-auto items-center justify-center p-10">
          <div className="md:w-1/2">
            <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
              New Collection
            </h1>
            <p className="text-base text-gray-500 md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint illo
              est debitis esse ipsa, ipsum saepe nostrum cumque neque adipisci
              facilis voluptas laboriosam eligendi fugiat.
            </p>
            <Link href="/Products">
              <div className="mt-12 flex justify-start text-center">
                <button className="bg-blue-500 py-2 px-10 text-white font-semibold text-lg  border-none rounded-md hover:bg-blue-600 active:bg-blue-700">
                  View Collection
                </button>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <Image
              src={HeroImage}
              width={350}
              height={800}
              alt="HeroImage"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
