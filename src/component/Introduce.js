import Header from "./Header";
import "../category_css/Introduce.css"
import React, { useState, useEffect } from 'react';
import Footer from "./Footer";
import FigureExample from "../introduce/FigureExample"
import Phone1 from "../phone/Phone1";


function Introduce () {

  return (
     <>
     <Header />
     <div style={{backgroundColor: 'black'}}>
     <img src="/image/background.jpg" 
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
        <p>VỀ CHU CHU</p>
        </div>
        <hr style={{ border: 'none', 
            borderTop: '3px solid white', 
            width: '30%', 
            marginBottom: '0', 
            position: 'absolute',
            top: "48%",
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

      <div className="figure-example"><FigureExample /></div>
      
      <div className="careers-core-value">
            <div className="container">
                <h3><span>Chào Mừng Đến Với Chu Chu</span></h3>
                <div className="wrap">
                    <div className="item">
                        <div className="head lazyloaded" style={{background: '#FF6600'}}>
                            <img src="/image/chatluong.png" alt="01 chat luong"/>
                            <span>01. CHẤT LƯỢNG</span>
                        </div>
                        <div className="content">
                            <p>Tại Chu Chu, chúng tôi cam kết mang đến cho bạn những sản phẩm hải sản tươi ngon nhất. Đội ngũ của chúng tôi chọn lọc kỹ lưỡng từ những nguồn cung cấp đáng tin cậy, đảm bảo rằng mỗi sản phẩm bạn nhận được đều là chất lượng tốt nhất.</p>
                            <img className="img-content" src="/image/chatluong.jpg" alt="01 chat luong"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="head lazyloaded" style={{background: '#00BFFF'}}>
                            <img src="/image/sudadang.png" alt="01 chat luong"/>
                            <span>02.SỰ ĐA DẠNG</span>
                        </div>
                        <div className="content">
                            <p>Với danh mục sản phẩm đa dạng, từ cá hồi Alaska, mực ống Mediter và các loại lẩu hài sản. Mang đến cho bạn sự đa dạng phong phú để lựa chọn. Bạn có thể dễ dàng tìm thấy những loại hải sản yêu thích của mình, cùng với thông tin chi tiết về nguồn gốc và cách chế biến.</p>
                            <img className="img-content" src="/image/sudadang.jpg" alt="01 chat luong"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="head lazyloaded" style={{background: '#FF3333'}}>
                            <img src="image/giaohang.png" alt="01 chat luong"/>
                            <span>03.GIAO HÀNG TẬN NƠI</span>
                        </div>
                        <div className="content">
                            <p>Chúng tôi hiểu rằng sự thuận tiện là yếu tố quan trọng. Vì vậy, chúng tôi cung cấp dịch vụ giao hàng nhanh chóng và đảm bảo an toàn cho những sản phẩm bạn chọn mua. Bạn có thể yên tâm nhận được hải sản tươi ngon tận cửa nhà mình mà không cần phải ra khỏi nhà.</p>
                            <img className="img-content" src="/image/giaohang.jpg" alt="01 chat luong"/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="head lazyloaded" style={{background: '#66CC00'}}>
                            <img src="/image/thongtin.png" alt="01 chat luong"/>
                            <span>04. THÔNG TIN CHI TIẾT</span>
                        </div>
                        <div className="content">
                            <p>Tại Chu Chu, chúng tôi chia sẻ thông tin chi tiết về từng sản phẩm, cung cấp hướng dẫn chế biến và các công thức nấu ăn sáng tạo. Chúng tôi muốn bạn không chỉ mua sản phẩm, mà còn trải nghiệm sự đam mê và kiến thức về hải sản.</p>
                            <img className="img-content" src="/image/thongtin.jpg" alt="01 chat luong"/>
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
export default Introduce;