import React from 'react'
import Bestseller from '../components/Bestseller/Bestseller'
import Days from '../components/Days/Days'
import Delivery from '../components/Delivery/Delivery'
import Sale from '../components/Sale/Sale'
import Slider from '../components/Slider/Slider'
import Feature from '../components/Feature/Feature'
import Free from '../components/Free/Free'
import Photo from '../components/Photo/Photo'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
      <Slider />
      <Delivery/>
      <Sale/>
      <Days/>
      <Bestseller/>
      <Days/>
      <Feature/>
      <Free/>
      <Days/>
      <Photo/>
    </div>
  )
}

export default Home