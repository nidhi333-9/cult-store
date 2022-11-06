import Company from "../components/Company";
import Content from "../components/Content";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import ProductItems from "../components/ProductItems";
import Sale from "../components/Sale";
import clothData from "../utils/cloth";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout title="Home Page">
      <div>
        <HomePage />
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {clothData.items.map((item) => (
          <Content
            item={item}
            key={item.variety}
          ></Content>
        ))}
      </div>
      <div>
        <Sale />
      </div>
      <div className="py-5">
        <h3 className="flex justify-center font-bold text-3xl py-14 text-gray-900">
          Our Popular Products
        </h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {data.products.map((product) => (
            <ProductItems
              product={product}
              key={product.slug}
            ></ProductItems>
          ))}
        </div>
      </div>

      <div>
        <Company />
      </div>
    </Layout>
  );
}
