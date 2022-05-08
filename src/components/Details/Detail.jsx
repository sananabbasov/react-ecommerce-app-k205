import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../api/config';
import '../Details/detail.scss'

function Detail() {

    const [products, setProducts] = useState([]);
    const [a,setActive] = useState([]);


    const getProducts = async () => {
        await fetch(BASE_URL + "product/productlist")
            .then((res) => res.json())
            .then((data) => setProducts(data.message));
    };

    useEffect(() => {
        getProducts();
    }, []);

     const photoActive = () => {
        a === 'active' ? setActive('') : setActive('active');
    }


    return (
        <div id='detail'>
            <div className="shop">
                <div className="container">
                    <div className="top">
                        <span>
                            <Link to='/'>Home</Link> / Shop </span>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left">
                                    <div className="row">
                                        <div className="col-lg-2">
                                            <img onClick={photoActive()} className={`sml-picture ${a}`} width='100%' src="https://cdn.pixabay.com/photo/2022/02/11/23/23/heart-7008170_960_720.png" alt="" />
                                            <img onClick={photoActive()} className={`sml-picture ${a}`} width="100%" src="https://cdn.pixabay.com/photo/2021/08/25/12/29/nature-6573288_960_720.png" alt="" />
                                            <img onClick={photoActive()} className={`sml-picture ${a}`} width='100%' src="https://cdn.pixabay.com/photo/2020/05/19/13/54/man-5190962_960_720.jpg" alt="" />

                                        </div>
                                        <div className="col-lg-10">
                                            <div className="big-picture">
                                                <img width="100%" src="https://cdn.pixabay.com/photo/2022/02/11/23/23/heart-7008170_960_720.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6">
                                <h3>Samsung Galaxy A12, 32GB, Black – (Locked)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail