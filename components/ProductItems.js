/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
// import { Axios } from "axios";

// export const getStaticProps = async () => {
//   const data = await Axios.get("https://fakestoreapi.com/products");

//   return {
//     props: {
//       productData: data.data,
//     },
//   };
// };

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
            alt={product.title}
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
            <h2 className="text-lg text-gray-800">{product.title}</h2>
          </a>
        </Link>
        <p className="mb-2 text-gray-600">{product.description}</p>
        <p className="font-semibold text-gray-900">$ {product.price}</p>
        <button
          className="primary-button"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
    // <div>
    //   {productData.map((product) => {
    //     return (
    //       <div key={product.id}>
    //         <h1>{product.title}</h1>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default ProductItems;
