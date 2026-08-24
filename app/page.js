import React from "react";
// import Navbar from '../compoents/Home/Navbar'
import Featured from "../compoents/Home/Featured";
import About from "../compoents/Home/About";
// import Footer from '../compoents/Home/Footer'
import Hero from "../compoents/Home/Hero";
import Collections from "../compoents/Home/Collections";
import Faq from "../compoents/Home/Faq";
import Form from "../compoents/Home/Form";
import WhyChooseUs from "../compoents/Home/WhyChooseUs";
import ShopByCategory from "../compoents/Home/ShopByCategory";
// import CTA from '@/compoents/Home/CTA'
import Testimonials from "@/compoents/Home/Testimonials";
import CTA2 from "@/compoents/Home/CTA2";
import Scroll from "@/compoents/Home/Scroll";
import Collections2 from "@/compoents/Home/Collections2";
import CurvedLoop from "@/compoents/ui/CurvedLoop";
import Parllel from "@/compoents/Home/Parllel";

export default function page() {
  return (
    <>
      <Hero />
     
      <About />
      <Featured />
      <Parllel />

      <ShopByCategory />
      <Scroll />
      <WhyChooseUs />
      {/* <Collections/> */}
      <Collections2 />
      <Form />
      <Faq />
      <Testimonials />
      {/* <CTA/> */}
      <CTA2 />
    </>
  );
}
