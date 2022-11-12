import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import Product from "../../components/Product";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton height={350} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton height={350} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton height={350} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  console.log(data);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="flex flex-col sm:flex-row justify-center  mx-5">
          <button
            className="primary-button my-3 mx-5"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="primary-button my-3 mx-5"
            onClick={() => filterProduct("men's clothing")}
          >
            Men&apos;s Clothing
          </button>
          <button
            className="primary-button my-3 mx-5"
            onClick={() => filterProduct("women's clothing")}
          >
            Women&apos;s Clothing
          </button>
          <button
            className="primary-button my-3 mx-5"
            onClick={() => filterProduct("jewelery")}
          >
            Jewellery
          </button>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filter.map((product) => {
            return (
              <Product
                product={product}
                key={product.id}
              />
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="py-2">
        <Link
          href="/"
          className="flex items-center text-blue-400"
        >
          <AiOutlineArrowLeft />
          Back to Product
        </Link>
      </div>
      <div className="my-5 py-5">
        <div className="row">
          <div className="col-span-12 mb-5">
            <h1 className="flex justify-center font-bold text-3xl py-14 text-gray-900">
              Latest Products
            </h1>
          </div>
        </div>
        <div>{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default Products;
