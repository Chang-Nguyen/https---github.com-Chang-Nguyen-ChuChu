import React, { useState, useEffect } from 'react';
import Header from "../component/Header";
import Phone1 from "../phone/Phone1";
import TabMenu from "../home/TabMenu";
import Footer from "../component/Footer";
import { FaFacebookF, FaTiktok} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Menu () {

  const [isFacebookHovered, setFacebookHovered] = useState(false);
    const [isTiktokHovered, setTiktokHovered] = useState(false);
    const [isInstagramHovered, setInstagramHovered] = useState(false);

  return (
     <>
        <Header className="b"/>

      <img
        src="/image/cc.jpg"
        style={{
          width: "100%",
          height: "730px",
          zIndex: "-1",
          top: "0",
          position: "absolute",
          position: "fixed", 
          backgroundSize: "cover"
        }}
      />
    <TabMenu />
    <Phone1 />
     </>
  )
}

export default Menu;