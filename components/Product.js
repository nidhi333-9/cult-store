/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card text-center grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div>
          <Link
            href={`/products/${product.products}`}
            legacyBehavior
          >
            <a>
              <img
                src={product.image}
                alt={product.title}
                width="auto"
                height={250}
                className="rounded shadow h-60"
              />
            </a>
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center p-5">
          <h2 className="text-lg text-gray-800">
            {product.title.substring(0, 12)}
          </h2>

          {/* <p className="mb-2 text-gray-600">{product.description}</p> */}
          <p className="font-semibold text-gray-900">$ {product.price}</p>
          <button
            className="primary-button"
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
