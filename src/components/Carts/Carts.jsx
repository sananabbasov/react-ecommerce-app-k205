import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BASE_URL } from '../../api/config';
import '../Carts/carts.scss'

function Carts() {
    const { id } = useParams()
    const [products, setProducts] = useState([]);

    const [count, setCounter] = useState(0);

    const getProducts = async () => {
        await fetch(BASE_URL + "product/getbyid/")
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    const artir = () => {
        setCounter(count => count + 1);
    }

    const azalt = () => {
        if (count < 1) {
            count = 1;
        }
        setCounter(count => count - 1);
    }



    useEffect(() => {
        getProducts()
    }, []);


    return (
        <div id='cart'>
            <div className="top">
                <div className="image">
                    <img src="https://cdn.pixabay.com/photo/2022/01/21/15/32/subway-6955069_960_720.jpg" alt="" />
                    <div className="text">
                        <h1>Your Cart</h1>
                        <span> <Link to="/">Home</Link>  / Cart</span>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="container">
                    <table>
                        <tr>
                            <th>Images</th>
                            <th>Product</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                        <tr>
                            <td>
                                <img width='150px' src="https://cdn.pixabay.com/photo/2022/01/21/15/32/subway-6955069_960_720.jpg" alt="" />
                            </td>
                            <td>Jacket Light</td>
                            <td>$130.00</td>
                            <td> <span className='buttonBox'>
                                <button onClick={azalt}>-</button>
                                <span className='count'>{count}</span>
                                <button onClick={artir}>+</button>
                            </span></td>
                            <td>$130.00</td>
                            <td><i class="fa-solid fa-x"></i></td>
                        </tr>

                        <tr>
                            <td>
                                <img width='150px' src="https://cdn.pixabay.com/photo/2022/01/21/15/32/subway-6955069_960_720.jpg" alt="" />
                            </td>
                            <td>Jacket Light</td>
                            <td>$130.00</td>
                            <td> <span className='buttonBox'>
                                <button onClick={azalt}>-</button>
                                <span className='count'>{count}</span>
                                <button onClick={artir}>+</button>
                            </span></td>
                            <td>$130.00</td>
                            <td><i class="fa-solid fa-x"></i></td>
                        </tr>
                    </table>
                </div>

            </div>
            <div className="bottom">
                <div className="container">
                    <div className="top">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-9">
                                <input type="text" placeholder='Coupen code' />
                                <button>Apply Coupon</button>
                            </div>
                            <div className="col-lg-3">
                                <button>Update Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="col-lg-7"></div>
                            <div className="col-lg-5">
                                <h3>Cart Totals</h3>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-8">Subtotal</div>
                                                <div className="col-lg-4 price">$250.0</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-8">Total</div>
                                                <div className="col-lg-4 price">$250.0</div>
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                                <button>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Carts