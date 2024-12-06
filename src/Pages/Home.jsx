import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import Request from '../Components/Hero/Request'
import Service from '../Components/All Service/Service'
import Goverment from '../Components/Goverment/Goverment'
import Feature from '../Components/Feature/Feature'
import Footerlink from '../Components/Footer/Footerlink'
import Footer from '../Components/Footer/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Request />
      <Service />
      <Goverment />
      <Feature />
      <Footerlink />
      <Footer />
    </>
  )
}

export default Home
