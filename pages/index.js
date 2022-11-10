import Company from "../components/Company";
import Link from "next/link";
import Content from "../components/Content";
// import HomePage from "../components/HomePage";
// import Layout from "../components/Layout";
// import ProductItems from "../components/ProductItems";
import Products from "../components/Products";
import Sale from "../components/Sale";
import clothData from "../utils/cloth";
import Image from "next/image";
import HeroImage from "../public/images/modelOne.png";
// import data from "../utils/data";

export default function Home() {
  return (
    <div>
      <div>
        {/* <HomePage /> */}
        <div className="w-fit pb-14">
          <div className="flex h-auto items-center justify-center p-10">
            <div className="md:w-1/2">
              <h1 className="my-5 text-5xl font-bold text-gray-800 md:text-7xl">
                New Collection
              </h1>
              <p className="text-base text-gray-500 md:text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                illo est debitis esse ipsa, ipsum saepe nostrum cumque neque
                adipisci facilis voluptas laboriosam eligendi fugiat.
              </p>
              <Link href="/products">
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
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {clothData.items.map((item) => (
          <Content
            item={item}
            key={item.variety}
          ></Content>
        ))}
      </div>

      <div>
        <Sale />
      </div>

      <div>
        <h3 className="flex justify-center font-bold text-3xl py-14 text-gray-900">
          Our Popular Products
        </h3>
        <Products />
      </div>
      <div className="py-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* {data.products.map((product) => (
            <ProductItems
              product={product}
              key={product.slug}
            ></ProductItems>
          ))} */}
        </div>
      </div>

      <div>
        <Company />
      </div>
    </div>
  );
}
