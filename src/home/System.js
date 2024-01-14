import Header from "../component/Header";
import "../category_css/Introduce.css"
import "../category_css/System.css"
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../component/Footer"
import Phone1 from "../phone/Phone1";

function System () {

  return (
     <>
     <Header />
     <div style={{backgroundColor: 'black'}}>
     <img src="/image/bghethong.png" 
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
        opacity: '0.6'
        }}></div>
      </div>
      <div>
        <div class="header-text" style={{ 
          position: "absolute", 
          top: "50%",
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          color: "white", 
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "100px"
          }}>
        <p>HỆ THỐNG</p>
        </div>
        <div style={{ 
          position: "absolute", 
          top: "60%",
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          color: "#f57d00", 
          fontFamily: "'Times New Roman', Times, serif",
          fontSize: "100px"
          }}>
            <h1>CHU CHU</h1>
        </div>
        <hr style={{ border: 'none', 
            borderTop: '3px solid white', 
            width: '30%', 
            marginBottom: '0', 
            position: 'absolute',
            top: "48%",
            backgroundColor: 'white'
        }} />
        <hr style={{ border: 'none', 
            borderTop: '3px solid white', 
            width: '30%', 
            marginLeft: '70%', 
            marginBottom: '0', 
            position: 'absolute',
            top: "48%",
        }} />
      </div>
      
      <div className="from_tt">
        <div class="maxwidth">
            <div class="box_map map_tt">
                <div class="ttkv">
                    <img src="image/icon.png" alt="HỆ THỐNG" />HỆ THỐNG Chu Chu</div>

                    <div class="info_left">
                        <div class="tt_kv">Chi nhánh cửa hàng</div>
                        <div class="info_cn">
                            <div class="tinh">Hà Nội</div>
                            <div class="item_cn" data-id="8">
                                <div class="name_cn">Chuchu Nguyễn Trãi</div>
                                    <p style={{color: 'black'}}>111, Thanh Xuân, Nguyễn Trãi, Hà Nội</p>
                                    <div class="info_item">
                                        <b style={{color: 'black'}}>1900.633.680</b>
                                        <Link to="/menu"><b>Xem thực đơn</b></Link>
                                        <a href="https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+%E1%BA%BEch+Xanh/@10.7600407,106.6853825,19z/data=!3m1!4b1!4m5!3m4!1s0x31752f1a5810fce5:0x3fd2615b35b38bfb!8m2!3d10.7600394!4d106.6859297" target="_blank">
                                            <b>Xem bản đồ</b></a>
                                    </div>		
                                    <div style={{color: 'black'}}>Mở cửa mỗi ngày / 10:00 AM - 10:00 PM</div>		     
                            </div> 
                            <div class="item_cn" data-id="7">
                                <div class="name_cn">ChuChu Xuân Thủy</div>
                                        <p style={{color: 'black'}}>69, Xuân Thủy, Cầu Giấy, Hà Nội</p>
                                        <div class="info_item">
                                            <b style={{color: 'black'}}>1900.633.670</b>
                                            <Link to="/menu"><b>Xem thực đơn</b></Link>
                                            <a href="https://goo.gl/maps/rHGwMMmJPmPzmv4N9" target="_blank">
                                                <b>Xem bản đồ</b>
                                            </a>
                                        </div>		
                                        <div style={{color: 'black'}}>Mở cửa mỗi ngày / 10:00 AM - 10:00 PM</div>	
                            </div>      
                        </div>  

                        <div class="info_cn">
                            <div class="tinh">Hồ Chí Minh</div>
                            <div class="item_cn" data-id="8">
                                <div class="name_cn">ChuChu Nguyễn Cảnh Chân</div>
                                    <p style={{color: 'black'}}>371D Nguyễn Cảnh Chân, Phường Nguyễn Cư Trinh Quận 1</p>
                                    <div class="info_item">
                                        <b style={{color: 'black'}}>1900.633.650</b>
                                        <Link to="/menu"><b>Xem thực đơn</b></Link>
                                        <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.910233557958!2d105.78603527500059!3d21.03627748752084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49e1a27bf1%3A0x4d5bbdad2d8f7155!2zNjkgWHXDom4gVGjhu6d5LCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1702376362302!5m2!1svi!2s" target="_blank">
                                            <b>Xem bản đồ</b></a>
                                    </div>		
                                    <div style={{color: 'black'}}>Mở cửa mỗi ngày / 10:00 AM - 10:00 PM</div>		     
                            </div> 
                            <div class="item_cn" data-id="7">
                                <div class="name_cn">ChuChu An Phú</div>
                                        <p style={{color: 'black'}}>59 SONG HÀNH, P. AN PHÚ, TP THỦ ĐỨC, TP.HCM</p>
                                        <div class="info_item">
                                            <b style={{color: 'black'}}>1900.633.650</b>
                                            <Link to="/menu"><b>Xem thực đơn</b></Link>
                                            <a href="https://goo.gl/maps/rHGwMMmJPmPzmv4N9" target="_blank">
                                                <b>Xem bản đồ</b>
                                            </a>
                                        </div>		
                                        <div style={{color: 'black'}}>Mở cửa mỗi ngày / 10:00 AM - 10:00 PM</div>	
                            </div>      
                        </div>
                    </div>
                    <div class="maps">
                    <div class="map cn_8">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.910233557958!2d105.78603527500059!3d21.03627748752084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab49e1a27bf1%3A0x4d5bbdad2d8f7155!2zNjkgWHXDom4gVGjhu6d5LCBE4buLY2ggVuG7jW5nIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1702376362302!5m2!1svi!2s"
                     style={{width:"650px", height:"452px", frameborder:"0", border:'0', allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe> 
                    </div> 
                    </div>
            </div>
        </div>
      </div>

      <Phone1 />
      <Footer />
     </>
  )
}
export default System;