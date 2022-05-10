import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../pages/Detail'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'

function MyRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
  )
}

export default MyRoutes