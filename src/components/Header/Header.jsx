import React, { useState } from 'react'
import '../Header/header.scss'

function Header() {

    const [a, setActive] = useState();
    const [b, setDropActive] = useState();
    const [c, setshopActive] = useState();
    const dropdown = () => {
        a == 'active' ? setActive('') : setActive('active');
    }
    const dropactive = () => {
        b == 'active' ? setDropActive('') : setDropActive('active');
    }
    const shopactive = () => {
        c == 'active' ? setshopActive('') : setshopActive('active');
    }

    return (
        <section id="header">
            <div className="topNav">
                <div className="left">
                    <div className='language'>
                        <span>Dil secin : </span>
                        <div className="langArea">
                            <span onClick={e => dropdown()}> Azerbaycan <i class="fa-solid fa-angle-down"></i></span>
                            <ul className={`language-list ${a}`}>
                                <li>Azerbaycan</li>
                                <li>Rus</li>
                                <li>Ingilis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="number">
                        <span>Need Help?</span>
                        <span>(000) 000 00 00</span>
                    </div>

                </div>
                <div className="right">
                    <ul>
                        <li>About Us</li>
                        <li>Order Tracking</li>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="nav">
                <div className="left">
                    <img width='200px' src="https://dukamarket.b-cdn.net/wp-content/uploads/2021/06/logo1.svg" alt="" />
                </div>
                <div className="center">
                    <div className="box">
                        <div className="selectArea">
                            <span onClick={e => dropactive()}>All Categories <i class="fa-solid fa-angle-down"></i></span>
                            <ul className={`select-list ${b}`}>
                                <li className='first'>Best Seller Products</li>
                                <li>Top 10 Offers</li>
                                <li>New Arrivals</li>
                            </ul>
                        </div>

                        <input type="text" placeholder='I m shopping for..' />
                        <button>
                            <i class="fa-solid fa-magnifying-glass search"></i>
                        </button>

                    </div>
                </div>
                <div className="right d-flex align-items-center">
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-user"></i>
                        </div>
                        <div className="right">
                            <span>Login <br /> My Account</span>
                        </div>
                    </div>
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div className="right">
                            <span>Login <br /> My Account</span>
                        </div>
                    </div>
                    <div className="boxOne d-flex align-items-center">
                        <div className="left">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div className="right">
                            <span>Login <br /> My Account</span>
                        </div>
                    </div>



                </div>

            </div>
            <hr />
            <div className="bottomNav d-flex justify-content-between">
                <div className="left">
                    <div className="shop-list">
                        <span onClick={e => shopactive()}><i class="fa-solid fa-bars"></i>  SHOP BY DEPARTMENT</span>
                        <ul className={`shop-listt ${c}`}>
                            <li>All Categories</li>
                            <hr />
                            <li>Phone and electronics</li>
                            <hr />
                            <li>Best Seller Products </li>
                            <hr />
                            <li>Top 10 Offers</li>
                        </ul>
                    </div>
                </div>
                <div className="center">
                    <ul className='d-flex list-unstyled  align-items-center justify-content-between'>
                        <li className='home'>HOME
                            <div className="dropdown-menu2 row">
                                <div className="col-lg-4 pb-3">
                                    <p className='bold'>HOME PAGES</p>
                                    <p className='yellow' >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'>HOME PAGES</p>
                                    <p >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-4">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                            </div>
                        </li>
                        <li className='about'>ABOUT US</li>
                        <li className='shop'>SHOP
                            <div className="dropdown-menu2 row">
                                <div className="col-lg-2 pb-3">
                                    <p className='bold'>HOME PAGES</p>
                                    <p className='yellow' >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'>HOME PAGES</p>
                                    <p >Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <p className='bold'><bold>HOME PAGES</bold></p>
                                    <p>Home one</p>
                                    <p>Home two</p>
                                    <p>Home Three</p>
                                    <p>Shop 3 Column</p>
                                </div>
                                <div className="col-lg-2">
                                    <img className='img-fluid' src="https://cdn.pixabay.com/photo/2022/04/05/19/27/penguin-7114280_960_720.jpg" alt="" />
                                </div>
                                <span className='end'>30% OFF the shipping of your first order with the code: DUKA-SALE30</span>
                            </div>
                        </li>
                        <li className='blog'>BLOG
                        <div className="dropdown-menu2 row">
                                <div>
                                    <p>Blog</p>
                                    <p>Blog detail</p>
                                </div>
                            </div>
                        </li>
                        <li className='pages'>PAGES
                        <div className="dropdown-menu2 row">
                                <div>
                                    <p>My account</p>
                                    <p>Product details</p>
                                    <p>Product details</p>
                                    <p>Product details</p>
                                    <p>Product details</p>

                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="right">
                    <span>Spend $120 more and get free shipping!</span>
                </div>
            </div>
        </section>
    )
}

export default Header