import Image from "next/legacy/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

function CheckoutProduct({ id, title, price, description, category, image }) {
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

  const removeItemFromCart = () => {
    dispatch(removeFromCart({ id }));
  };
  return (
    <div
      className="grid grid-cols-5 items-center"
      key={id}
    >
      <Image
        src={image}
        height={200}
        width={200}
        objectFit="contain"
        alt="productImage"
      />

      <div className="col-span-3">
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
        <div>
          <p className="line-clamp-2"> {description}</p>
          <p className=" text-xs italic text-gray-400">{category}</p>
          <p className="mb-5 font-bold">${price}</p>
        </div>
      </div>
      <div className="flex flex-row space-x-5">
        <button
          onClick={addItemToCart}
          className="primary-button"
        >
          +
        </button>
        <button
          onClick={removeItemFromCart}
          className="primary-button"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
