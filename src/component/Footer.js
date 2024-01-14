import { FaFacebookF, FaTiktok} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import React, { useState, useEffect } from 'react';
import "../category_css/Introduce.css"
import "../category_css/Franchise.css"

function Footer() {

    const [isFacebookHovered, setFacebookHovered] = useState(false);
    const [isTiktokHovered, setTiktokHovered] = useState(false);
    const [isInstagramHovered, setInstagramHovered] = useState(false);

    return (
        <div className="chantrang">
        <footer>
        <div class="now">
                <div class="boxcenter2">
                    <div class="boxfooter1 colorc mrr2">
                        <h4 
                        style={{
                          fontSize: '20px', 
                          fontWeight: 'bold'
                          }}>Giờ mở cửa</h4>
                        <span>10h00 - 22h00</span><br/>
                        <span>Tất cả các ngày trong tuần</span><br/>
                        <h4 
                        style={{
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          marginTop: '20px',
                          href: '/system',
                          }}>Hệ thống nhà hàng</h4>
                        <h4 
                        style={{
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          }}>Hotline: (10h00 - 22h00)</h4>
                        <h4 
                        style={{
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          color: 'red'
                          }}>099999999</h4>
                        <h4 
                        style={{
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          }}>Email <span>....</span></h4> 
                        <img src="/image/icon.png" 
                        style={{
                          width: '100px',
                          height: '100px',
                          marginTop: '20px'
                        }}></img>
                    </div>
                </div>
                <div class="boxfooter2 colorc mrr2">
                <img src="/image/lg.png" 
                        style={{
                          width: '300px',
                          height: '300px',
                        }} href="/"></img>
                    <div class="now textcenter colorc">
                    Copyright © 2003 - 2023 . Design by ChuChu</div>
                </div>
                <div class="boxfooter3 colorc">
                <h4 
                        style={{
                          fontSize: '18px', 
                          fontWeight: 'bold', 
                          }}>Kết nối với Chuchu</h4> 

          <div class="web">
            
            <a href="https://www.facebook.com/groups/676675247763192" target="_blank">
            <FaFacebookF  
             style={{ 
             verticalAlign: 'middle',
             marginBottom: '5px',
             marginRight: '20px',
             color: isFacebookHovered ? 'orange' : 'white'
             }} size={18}
                onMouseOver={() => setFacebookHovered(true)}
                onMouseOut={() => setFacebookHovered(false)}/></a>
 
            <a href="https://www.tiktok.com/@pamyeuoi?_t=8i1oAV28Eks&_r=1" target="_blank">
            <FaTiktok   
             style={{ 
             verticalAlign: 'middle',
             marginBottom: '5px',
             marginRight: '20px',
             color: isTiktokHovered ? 'orange' : 'white'
             }} size={18}
                onMouseOver={() => setTiktokHovered(true)}
                onMouseOut={() => setTiktokHovered(false)}/></a>
 
            <a href="https://www.instagram.com/changnecacbaniu/" target="_blank">
            <GrInstagram  
             style={{ 
             verticalAlign: 'middle',
             marginBottom: '5px',
             color: isInstagramHovered ? 'orange' : 'white'
             }} size={18}
                onMouseOver={() => setInstagramHovered(true)}
                onMouseOut={() => setInstagramHovered(false)}/></a>
         </div>
                </div>
            </div>
        </footer>

      </div>
    )
}
export default Footer;