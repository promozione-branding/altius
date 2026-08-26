import { notFound } from "next/navigation";
import ProductClient from "./ProductClient";
import { categories } from "@/Data/Data";

export async function generateStaticParams() {
  return categories.flatMap((category) =>
    category.products.map((product) => ({
      product: product.slug,
    }))
  );
}

export async function generateMetadata({ params }) {
  const { product: slug } = await params;

  const productData = categories
    .flatMap((category) => category.products)
    .find((product) => product.slug === slug);

  if (!productData) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${productData.name} | Elstrong`,
    description: productData.shortDescription,
  };
}

export default async function Page({ params }) {
  const { product: slug } = await params;

  // Find product
  const productData = categories
    .flatMap((category) => category.products)
    .find((product) => product.slug === slug);

  if (!productData) {
    notFound();
  }

  // Find parent category
  const categoryData = categories.find((category) =>
    category.products.some((product) => product.slug === slug)
  );


  return (
    <ProductClient
      product={productData}
      category={categoryData}
    />
  );
}