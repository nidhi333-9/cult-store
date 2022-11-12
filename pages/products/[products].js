import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
// import { useParams } from "react-router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useParams } from "react-router";

const ProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  const Loading = () => {
    return <>Loading...</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <h1>{product.title}</h1>
      </>
    );
  };
  return (
    <>
      <div className="py-2">
        <Link
          href="/products"
          className="flex items-center text-blue-400"
        >
          <AiOutlineArrowLeft />
          Back to Product
        </Link>
      </div>
      <div>
        <div>{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default ProductsDetails;
