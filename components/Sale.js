import Image from "next/image";
import React from "react";
import SaleImage from "../public/images/sale.jpg";

const Sale = () => {
  return (
    <>
      <div className="flex h-auto items-center justify-center space-x-14 p-10">
        <div>
          <Image
            src={SaleImage}
            width={500}
            height={500}
            alt="saleImage"
          />
        </div>
        <div>
          <h4 className="text-base text-blue-500 font-bold md:text-2xl">
            -50%
          </h4>
          <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
            Global Sale
          </h1>
          <button className="bg-blue-500 py-2 px-10 text-white font-semibold text-lg  border-none rounded-md hover:bg-blue-600 active:bg-blue-700">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sale;
