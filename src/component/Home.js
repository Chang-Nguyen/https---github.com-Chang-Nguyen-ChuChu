import { useState, useEffect } from "react"
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";

import '../category_css/Home.css'
import "../category_css/SlideShow.css"
import Phone from "../phone/Phone";



function Home () {

  const [currentImage, setCurrentImage] = useState(0);
  const [sliderInterval, setSliderInterval] = useState(null);
  const [mouseOver, setMouseOver] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(`${process.env.PUBLIC_URL}/image/backgdhome.jpg`);


const links = [
  { id: 269, href: '/menu', title: 'MENU', subtitle: 'THỰC ĐƠN', image: `${process.env.PUBLIC_URL}/image/bgmenu.png`},
  { id: 273, href: '/order', title: 'DELIVERY', subtitle: 'GIAO HÀNG NGAY', image: `${process.env.PUBLIC_URL}/image/bggiaohang.jpg` },
  { id: 274, href: '/system', title: 'VISIT', subtitle: 'HỆ THỐNG', image: `${process.env.PUBLIC_URL}/image/bghethong.png` }
];

const handleMouseOver = (index) => {
  setCurrentImage(index);
  setBackgroundImage(links[index]?.image || `${process.env.PUBLIC_URL}/image/backgdhome.jpg`);
};

const handleMouseLeave = () => {
  setCurrentImage(0);
  setBackgroundImage(`${process.env.PUBLIC_URL}/image/backgdhome.jpg`);
};

  return (
     <>
        <Header className="b"/>

      <img
        src={`${process.env.PUBLIC_URL}/image/backgdhome.jpg`}
        alt="Background"
        style={{
          width: "100%",
          height: "730px",
          zIndex: "-1",
          top: "0",
          position: "absolute",
          position: "fixed", backgroundSize: "cover"
        }}
      />

      <div
        style={{
          width: "100%",
          height: "730px",
          zIndex: "-1",
          top: "0",
          position: "absolute",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover"
        }}
      />

      <div className="slide_trung">
        <div className="slideshow">
          <div className="ttsl">
            <div className="maxwidth d-flex flex-wrap justify-content-around align-content-center">
              {links.map((link, index) => (
                <Link
                  key={link.id}
                  to={link.href}
                  onMouseOver={() => handleMouseOver(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <p>{link.title}</p>
                  <span>{link.subtitle}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    <Phone />
     </>
  )
}

export default Home;