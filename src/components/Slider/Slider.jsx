import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Slider/slider.scss";
import { BASE_URL } from "./../../api/config";

function Slider() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    await fetch(BASE_URL + "products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mySlider">
      <Swiper>
        {products.map((item) => (
          <SwiperSlide>
              <img
                  src="https://cdn.pixabay.com/photo/2022/04/03/22/05/buildings-7109918_960_720.jpg"
                  alt=""
                />
                <div className="container">
                    <div className="deal">
                        <h3>{item.title}</h3><br />
                        <h6>{item.description}</h6><br />
                        <button>DISCOVER NOW</button>
                    </div>
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;