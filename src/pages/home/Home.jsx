import React from 'react'
import Faqs from '../../components/Faqs'
import Footer from '../../components/Footer'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs/>
      <Values/>
      <Faqs/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home