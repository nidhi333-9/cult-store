import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ProductScreen = () => {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link
          href="/"
          className="flex items-center text-blue-400"
        >
          <AiOutlineArrowLeft />
          Back to Product
        </Link>
      </div>
      <h1>{product.name}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        consectetur deleniti, nemo laborum vitae doloremque inventore aspernatur
        vel aut et iusto perferendis illum sit deserunt, blanditiis sed.
        Perferendis, ducimus? Quo optio accusamus iusto! Placeat tempore fugit
        numquam cum sapiente?
      </p>
    </Layout>
  );
};

export default ProductScreen;
