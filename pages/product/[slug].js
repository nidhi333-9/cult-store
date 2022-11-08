import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
// import Layout from "../../components/Layout";
import data from "../../utils/data";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Image from "next/image";

const ProductScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div title={product.name}>
      <div className="py-2">
        <Link
          href="/"
          className="flex items-center text-blue-400"
        >
          <AiOutlineArrowLeft />
          Back to Product
        </Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand : {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews} reviews
            </li>
            <li>Description : {product.description}</li>
          </ul>
        </div>
        <div className="card p-5">
          <div className="mb-2 flex justify-between">
            <div>Price</div>
            <div>$ {product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In stock" : "Unavailable"}</div>
          </div>
          <button className="primary-button w-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
