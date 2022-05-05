import React from 'react'
import '../Footer/Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <p className='parag-1'>Follow Us</p>
                            <p className='parag-2'>We make consolidating, marketing and tracking your social media website easy.</p>
                            <div className="icons">
                                <i class="fa-brands fa-facebook-f face"></i>
                                <i class="fa-brands fa-twitter twit"></i>
                                <i class="fa-brands fa-youtube youtube"></i>
                                <i class="fa-brands fa-linkedin-in linkedn"></i>
                                <i class="fa-solid fa-rss rss"></i>
                                <i class="fa-brands fa-dribbble drib"></i>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className='parag-1'>Sign Up To Newsletter</p>
                            <p className='parag-2'>Join 60.000+ subscribers and get a new discount coupon on every Saturday.</p>
                            <div className="box">
                                <input type="text" placeholder='Enter your email here..' />
                                <button>
                                    SUBSCRIBE
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <p className='parag-1'>Download App</p>
                            <p className='parag-2'>DukaMarket App is now available on App Store & Google Play. Get it now.</p>
                            <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/04/app_android.png" alt="" />
                            <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/04/app_ios.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='center'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 box">
                            <ul>
                                <h6>Customer Care</h6><br />
                                <li>New Customers</li>
                                <li>How to Use Account</li>
                                <li>Placing an Order</li>
                                <li>Payment Methods</li>
                                <li>Delivery & Dispatch</li>
                                <li>Problems with Order</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 box">
                            <ul>
                                <h6>Customer Service</h6><br />
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>Report Abuse</li>
                                <li>Submit a Dispute</li>
                                <li>Policies & Rules</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 box">
                            <ul>
                                <h6>My Account</h6><br />
                                <li>Product Support</li>
                                <li>Checkout</li>
                                <li>Shopping Cart</li>
                                <li>Wishlist</li>
                                <li>Terms & Conditions &</li>
                                <li>Redeem Voucher</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 box">
                            <ul>
                                <h6>Quick Links</h6><br />
                                <li>Store Location</li>
                                <li>My Account</li>
                                <li>Order Tracking</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 box">
                            <ul>
                                <h6>About The Store</h6><br />
                                <li>Our mission statement is to
                                    provide the absolute best
                                    customer experience available
                                    in the Electronic industry without
                                    exception.
                                </li>
                                <div className="box1">
                                    <div className="d-flex">
                                        <div className="icon">
                                            <i class="fa-solid fa-headset"></i>
                                        </div>
                                        <div className="box2">
                                            <span className='spann'>Got Question? Call us 24/7!</span> <br />
                                            <span className='span1'>(+100) 123 456 7890</span>
                                        </div>
                                    </div>
                                </div>
                                <li>Add : Walls Street 68, Mahattan, New York, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="container">
                    <span>Online Shopping /</span>
                    <span>Promotions /</span>
                    <span>My Orders /</span>
                    <span>Help /</span>
                    <span>Customer Service /</span>
                    <span>Support /</span>
                    <span>Most Populars /</span>
                    <span>New Arrivals /</span>
                    <span>Manufacturers  /</span>
                    <span>Manufacturers  /</span>
                    <span>Garden Equipments  /</span>
                    <span>Powers And Hand Tools  /</span>
                    <span>Utensil & Gadget   /</span>
                    <span> Scanners  /</span>
                    <span>Store /</span>
                    <span>Business /</span>

                    <div className="image">
                        <img src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/04/payment.png" alt="" />
                    </div>
                    <div className="text">
                        <p>Copyright © <span>DukaMarket</span> . All Rights Reserved. Powered by <span>Theme_Pure.</span> </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer