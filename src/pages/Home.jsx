import React from 'react'
import Delivery from '../components/Delivery/Delivery'
import Sale from '../components/Sale/Sale'
import Slider from '../components/Slider/Slider'

function Home() {
  return (
    <div>
      <Slider />
      <Delivery/>
      <Sale/>
    </div>
  )
}

export default Home