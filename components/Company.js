import Image from "next/image";
import React from "react";
import Nike from "../public/images/nike.png";
import Adidas from "../public/images/adidas.png";
import Raymond from "../public/images/raymond.png";
import Oliver from "../public/images/oliver.png";
import Zara from "../public/images/zara.png";

const Company = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 py-5">
        <div>
          <Image
            src={Nike}
            width={200}
            height={200}
            alt="zara"
          />
        </div>
        <div>
          <Image
            src={Adidas}
            width={200}
            height={200}
            alt="zara"
          />
        </div>
        <div>
          <Image
            src={Raymond}
            width={200}
            height={200}
            alt="zara"
          />
        </div>
        <div>
          <Image
            src={Oliver}
            width={200}
            height={200}
            alt="zara"
          />
        </div>
        <div>
          <Image
            src={Zara}
            width={200}
            height={200}
            alt="zara"
          />
        </div>
      </div>
    </>
  );
};

export default Company;
