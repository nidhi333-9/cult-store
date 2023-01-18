import Banner from "../components/Banner";
import { getSession } from "next-auth/react";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  // const { data: session } = useSession();
  return (
    <>
      <main>
        <Banner />
        <ProductFeed products={products} />
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
