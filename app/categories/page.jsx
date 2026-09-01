import React from 'react'
import AllCategories from './AllCategories'
import { categories } from "@/Data/Data";

export default function page() {
  return (
    <>
    <AllCategories categories={categories} />
    </>
  )
}
