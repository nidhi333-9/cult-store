// import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToCart(product));
  };
  return (
    <div
      className=" card relative flex flex-col border z-30 p-10 bg-white"
      key={id}
    >
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <div className="flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          width="auto"
          height={250}
          className="rounded shadow h-60 "
        />
      </div>

      <h4 className="my-3">{title.substring(0, 12)}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <AiFillStar
              key={i}
              className="text-blue-500"
            />
          ))}
      </div>
      {/* <div> */}
      <p className="line-clamp-2"> {description}</p>
      <p className="mb-5 font-bold">${price}</p>
      {/* </div> */}

      {/* <div> */}
      <button
        onClick={addItemToCart}
        className="primary-button w-full"
      >
        Add to Cart
      </button>
      {/* </div> */}
    </div>
  );
}

export default Product;
