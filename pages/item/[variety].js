import { useRouter } from "next/router";
import React from "react";
// import Layout from "../../components/Layout";

import clothData from "../../utils/cloth";

const ItemScreen = () => {
  const { query } = useRouter();
  const { variety } = query;
  const item = clothData.items.find((x) => x.variety === variety);
  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <div title={item.name}>
      Items
      <h1>{item.name}</h1>
    </div>
  );
};

export default ItemScreen;
