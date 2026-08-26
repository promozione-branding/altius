import { categories } from "@/Data/Data";
import { notFound } from "next/navigation";
import CategoryPage from "./CategoryPage";

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;

  const categoryData = categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${categoryData.name} | Premium LED Lighting`,
    description: categoryData.description,
  };
}

export default async function Page({ params }) {
  const { category } = await params;

  const categoryData = categories.find(
    (item) => item.slug === category
  );

  if (!categoryData) {
    notFound();
  }

  return <CategoryPage categoryData={categoryData} />;
}