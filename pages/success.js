import { useRouter } from "next/router";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Success() {
  const router = useRouter();
  return (
    <main className="card max-w-lg mx-auto">
      <div className="flex flex-col p-10"></div>
      <div className="flex items-center space-x-2 mb-5">
        <AiFillCheckCircle className="h-14 w-14 text-green-600" />
        <h2 className="text-4xl font-bold">Thank You!</h2>
      </div>

      <h3 className="px-3 text-xl">Your order has been confirmed! 🥳</h3>
      <button
        onClick={() => router.push("/")}
        className="primary-button"
      >
        Go to Home Page
      </button>
    </main>
  );
}

export default Success;
