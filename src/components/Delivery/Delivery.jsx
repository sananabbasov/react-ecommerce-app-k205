import React from 'react'
import '../Delivery/delivery.scss'

function Delivery() {
    return (
        <div className='general'>
            <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 d-flex align-items-center box">
                    <div className="left">
                        <i class="fa-solid fa-truck"></i>
                    </div>
                    <div className="right">
                        <span className='first'>FREE DELIVERY</span> <br />
                        <span className='second'>For all orders over $120</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center box">
                    <div className="left">
                        <i class="fa-solid fa-money-check"></i>
                    </div>
                    <div className="right">
                        <span className='first'>SAFE PAYMENT</span> <br />
                        <span className='second'>100% secure payment</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center box">
                    <div className="left">
                        <i class="fa-solid fa-comments"></i>
                    </div>
                    <div className="right">
                        <span className='first'>24/7 HELP CENTER</span> <br />
                        <span className='second'>Delicated 24/7 support</span>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-center box">
                    <div className="left">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div className="right">
                        <span className='first'>FRIENDLY SERVICES</span> <br />
                        <span className='second'>30 day satisfaction guarantee</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Delivery