/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductItems = ({ product }) => {
  return (
    <div className="bg-slate-100">
      <Link
        href={`/product/${product.slug}`}
        legacyBehavior
      >
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link
          href={`/product/${product.slug}`}
          legacyBehavior
        >
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p className="font-semibold">$ {product.price}</p>
        <button
          className="bg-blue-500 text-white text-lg px-2 py-1 rounded-md"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
