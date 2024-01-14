import Header from "./Header";
import React, { useState, useEffect } from 'react';
import "../category_css/Introduce.css"
import "../category_css/Franchise.css"
import Footer from "./Footer";
import Phone1 from "../phone/Phone1";

function  Franchise() {

  return (
     <>
     <Header />
     <div style={{backgroundColor: 'black'}}>
     <img src="/image/bgdfranchise.png" 
        style={{
          width: "100%", 
          height: "740px",
          zIndex: "-1", 
          top:"0", 
          position: "absolute",
          }}>
      </img>

      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)',  width: "100%", height: "740px", position: "absolute", 
        zIndex: "-1", 
        top: '0',
        opacity: '0.8'
        }}></div>

      </div>

      <div>
        <div className="header-text">
        <p>NHƯỢNG QUYỀN</p>
        </div>
        <hr style={{ border: 'none', 
            borderTop: '3px solid white', 
            width: '25%', 
            marginBottom: '0', 
            position: 'absolute',
            top: "48%",
        }} />
        <hr style={{ border: 'none', 
            borderTop: '3px solid white', 
            width: '30%', 
            marginLeft: '75%', 
            marginBottom: '0', 
            position: 'absolute',
            top: "48%",
        }} />
      </div>

      <div className="image" >
      <div className="imagec" style={{ display: 'flex' }}>
        <img
          src="/image/img1.jpg"
          alt="Your Image"
          style={{ width: '50%', height: '1000px' }}
        />
        <img
          src="/image/img2.jpg"
          alt="Your Image"
          style={{ width: '50%', height: '1000px' }}
        />
      </div>
      <div>
        <img src="/image/img3.png"
        style={{ width: '100%', height: '600px' }}/>
      </div>
      <div className="imagec" style={{ display: 'flex' }}>
        <img
          src="/image/img4.jpg"
          alt="Your Image"
          style={{ width: '50%', height: '1000px' }}
        />
        <img
          src="/image/img5.jpg"
          alt="Your Image"
          style={{ width: '50%', height: '1000px' }}
        />
      </div>
      </div>

      <Phone1 />
      <Footer/>
     </>
  )
}
export default Franchise;