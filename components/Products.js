/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
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
        console.log(filter);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="mx-5">
          <button className="primary-button mx-5">All</button>
          <button className="primary-button mx-5">Men&apos;s Clothing</button>
          <button className="primary-button mx-5">Women&apos;s Clothing</button>
          <button className="primary-button mx-5">Jewellery</button>
        </div>
        {filter?.map((product) => {
          <div className="card">
            <img
              src={product.image}
              alt={product.title}
              width="auto"
              height="auto"
              className="rounded shadow"
            />

            <div className="flex flex-col items-center justify-center p-5">
              <h2 className="text-lg text-gray-800">{product.title}</h2>

              <p className="mb-2 text-gray-600">{product.description}</p>
              <p className="font-semibold text-gray-900">$ {product.price}</p>
              <button
                className="primary-button"
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </div>;
        })}
      </>
    );
  };
  return (
    <div>
      <div className="my-5 py-5">
        <div className="row">
          <div className="col-span-12 mb-5">
            <h1 className="text-center text-xl font-bold">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
