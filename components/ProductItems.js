/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const ProductItems = ({ product }) => {
  return (
    <div className="card">
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
            <h2 className="text-lg text-gray-800">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2 text-gray-600">{product.brand}</p>
        <p className="font-semibold text-gray-900">$ {product.price}</p>
        <button
          className="primary-button"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItems;
