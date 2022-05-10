import React from 'react'
import { Link } from 'react-router-dom'
import '../Checkouts/checkout.scss'

function Checkouts() {
  return (
    <div id='check'>
        <div className="top">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2022/01/21/15/32/subway-6955069_960_720.jpg" alt="" />
                    <div className="text">
                        <h1>Checkout</h1>
                        <span> <Link to="/">Home</Link>  / Checkout</span>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Checkouts