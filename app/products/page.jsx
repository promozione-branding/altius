import React from "react";
import AllProductClient from "./AllProductClient";
import { categories } from "@/Data/Data";


export const metadata = {
  title: "LED Lighting Products | Explore Elstrong's Range",
  description: "Explore Elstrong's complete range of LED lighting products, from indoor panels and bulbs to concealed and outdoor lights, designed for efficient illumination.",
};

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
