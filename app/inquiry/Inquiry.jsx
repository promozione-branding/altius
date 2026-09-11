import Header from "@/compoents/Inquiry/Header";
import Hero from "@/compoents/Inquiry/Hero";
import Product from "@/compoents/Inquiry/Product";
import React from "react";
import Stats from "./Stats";
import Form from "@/compoents/Inquiry/Form";
import InquiryFooter from "@/compoents/Inquiry/InquiryFooter";
import CTA from "@/compoents/Inquiry/CTA";
import Whychoose from "@/compoents/Inquiry/Whychoose";
import Category from "@/compoents/Inquiry/Category";
import Mobilefooter from "@/compoents/Inquiry/Mobilefooter";
import About from "@/compoents/Inquiry/About";

export default function Inquiry() {
  return (
    <>
      <Mobilefooter />
      <Header />
      <Hero />
      <Stats />
      <Category />
      <About/>
      <Product />
      <Whychoose />
      <Form />
      <CTA />
      <InquiryFooter />
    </>
  );
}
