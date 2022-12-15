import Banner from "../components/Banner";

import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <>
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
