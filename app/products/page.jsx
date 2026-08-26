import React from "react";
import AllProductClient from "./AllProductClient";
import { categories } from "@/Data/Data";

export default function Page() {
  const products = categories.flatMap((category) =>
    (category.products || []).map((product) => ({
      ...product,
      categoryName: category.name,
      categorySlug: category.slug,
    })),
  );

  console.log(products);

  return <AllProductClient products={products} />;
}
