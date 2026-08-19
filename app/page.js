import React from 'react'
import Navbar from './compoents/Home/Navbar'
import Featured from './compoents/Home/Featured'
import About from './compoents/Home/About'
import Footer from './compoents/Home/Footer'
import Hero from './compoents/Home/Hero'
import Collections from './compoents/Home/Collections'
import Faq from './compoents/Home/Faq'
import Form from './compoents/Home/Form'
import WhyChooseUs from './compoents/Home/WhyChooseUs'
import ShopByCategory from './compoents/Home/ShopByCategory'

export default function page() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Featured/>
    <About/>
    <ShopByCategory/>
    <WhyChooseUs/>
    <Collections/>
    <Form/>
    <Faq/>
    <Footer/>
    </>
  )
}
