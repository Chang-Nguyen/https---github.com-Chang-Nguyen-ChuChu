import 'bootstrap/dist/css/bootstrap.css';
import '../category_css/Cart.css';
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaConciergeBell, FaFacebookF, FaTiktok} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import "../category_css/Demo.css";
import Book from '../home/Book';
import { useLocation } from 'react-router-dom';


const Cart = () => {

    const [count, setCount] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isTiktokHovered, setTiktokHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

  const location = useLocation();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    // Lấy dữ liệu từ location.state.cartItems và set vào state
    const items = location.state?.cartItems || [];
    setCartItems(items);
  }, [location.state]);
 
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => {
      const priceString = cartItem.gia.replace(/[đ,.]/g, '').trim(); 
      const price = parseFloat(priceString);
      
      if (!isNaN(price)) {
        return total + price;
      }
  
      console.error("Invalid price:", cartItem.gia);
      return total;
    }, 0);
  };
  

  // Hàm tính tổng tiền hàng (bao gồm thuế VAT)
  const calculateTotalAmount = () => {
    const totalPrice = calculateTotalPrice();
    const vat = 50000; 

    return totalPrice + vat;
  };

  const handlePayment = async (event) => {
    event.preventDefault();

    // Get form data for 'add_user'
    const addUserForm = new FormData(document.getElementById('add_user_form'));
    // Send 'add_user' form data to the backend
    await fetch('/add_user', {
      method: 'POST',
      body: addUserForm,
    });

    // Get form data for 'add_order'
    const addOrderForm = new FormData(document.getElementById('add_order_form'));
    // Send 'add_order' form data to the backend
    await fetch('/add_order', {
      method: 'POST',
      body: addOrderForm,
    });

    window.location.href = '/thank-you';
  };

    return(
            <>
            <Navbar bg="light" data-bs-theme="light" style={{height:"100px"}}>
        <Container>
          <Navbar.Brand href="/">
          <img
            alt=""
            src="/image/logo.png"
            width="300"
            height="80"
            className="d-inline-block align-top"
          />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <Nav.Link style={{color:"black"}} href="/">Home</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/introduce">Giới thiệu</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/franchise">Nhượng quyền</Nav.Link>
            <Nav.Link style={{color:"black"}} href="/news">Tin tức</Nav.Link>
            <div class="menu2 d-flex flex-wrap justify-content-between align-items-center">
                  <button className="button button5" onClick={openModal}>
                    Đặt bàn
                    <FaConciergeBell
                    style={{
                        marginLeft: '10px',
                        verticalAlign: 'middle',
                        marginBottom: '5px',
                    }}
                    size={18}
                    />
                  </button>
                  <Book isOpen={modalIsOpen} closeModal={closeModal} />
                    <div class="mxh1 d-flex flex-wrap">
            
                       <a href="https://www.facebook.com/groups/676675247763192" target="_blank">
                       <FaFacebookF  
                        style={{ 
                        verticalAlign: 'middle',
                        marginBottom: '5px',
                        color: isFacebookHovered ? 'orange' : 'black'
                        }} size={18}
                           onMouseOver={() => setFacebookHovered(true)}
                           onMouseOut={() => setFacebookHovered(false)}/></a>
            
                       <a href="https://www.tiktok.com/@pamyeuoi?_t=8i1oAV28Eks&_r=1" target="_blank">
                       <FaTiktok   
                        style={{ 
                        verticalAlign: 'middle',
                        marginBottom: '5px',
                        color: isTiktokHovered ? 'orange' : 'black'
                        }} size={18}
                           onMouseOver={() => setTiktokHovered(true)}
                           onMouseOut={() => setTiktokHovered(false)}/></a>
            
                       <a href="https://www.instagram.com/changnecacbaniu/" target="_blank">
                       <GrInstagram  
                        style={{ 
                        verticalAlign: 'middle',
                        marginBottom: '5px',
                        color: isInstagramHovered ? 'orange' : 'black'
                        }} size={18}
                           onMouseOver={() => setInstagramHovered(true)}
                           onMouseOut={() => setInstagramHovered(false)}/></a>
                    </div>
                    <div class="ngonngu">
                    <img src="/image/co.jpg" 
                        style={{
                        width: "30px", 
                        height: "20px",
                        verticalAlign: 'middle',
                        marginBottom: '5px',
                        }}></img>
                    </div>
                </div>
          </Nav>
        </Container>
      </Navbar>
      
      <section className="delivery">
      <form method='POST' action='/add_order' className="container" id="add_order_form">
              <div className="container">
                <div className="delivery-content row">
                  <div className="delivery-content-left">
                  <form id="add_user_form" style={{margin: "-13px 0 0 0px"}} method='POST' action='http://localhost:3000/add_user'>

                    <p>Vui lòng chọn địa chỉ giao hàng</p>

                    <div className="delivery-content-left-input-top row">
                      <div className="delivery-content-left-input-top-item">
                        <label for="">Họ tên <span style={{color : "red"}}>*</span></label>
                        <input id='name' name='name' type="text" />
                      </div>
                      <div className="delivery-content-left-input-top-item">
                        <label for=""
                          >Điện thoại <span style={{color : "red"}}>*</span></label>
                        <input id='phone' name='phone' type="text" />
                      </div>
                      <div className="delivery-content-left-input-top-item">
                        <label for="">Tỉnh/TP <span style={{color : "red"}}>*</span></label>
                        <input id='city' name='city' type='text'></input>
                      </div>
                      <div className="delivery-content-left-input-top-item">
                        <label for=""
                          >Quận/Huyện <span style={{color : "red"}}>*</span></label>
                        <input id='district' name='district' type='text'></input>
                      </div>
                      <div className="delivery-content-left-input-top-item">
                        <label for=""
                          >Phường/Xã <span style={{color : "red"}}>*</span></label>
                          <input id='commune' name='commune' type='text'></input>
                      </div>
                    </div>
                    <div className="delivery-content-left-input-bottom" style={{marginTop: "10px"}}>
                      <label for="">Địa chỉ <span style={{color : "red"}}>*</span></label>
                      <input id='address' name='address' type="text" />
                    </div>
                    <div class="payment-content-left-method-payment">
                      <p style={{fontWeight : "bold", marginTop: "20px"}}>
                        Phương thức thanh toán
                      </p>
                      <p>
                        Mọi giao dịch đều được bảo mật và mã hoá. Thông tin thẻ tín dụng
                        sẽ không bao giờ được lưu lại.
                      </p>
                      <div class="payment-content-left-method-payment-item">
                        
                        <label for=""><input type="radio" name="method-payment" id='method-payment' value={"Thanh toán Momo(OnePay)"} />Thanh toán Momo(OnePay)</label>
                      </div>
                      <div class="payment-content-left-method-payment-item">
                        
                        <label for=""><input type="radio" name="method-payment" id='method-payment' value={"Thu tiền tận nơi"}/>Thu tiền tận nơi</label>
                      </div>
                    </div>
 
                    <div className="delivery-content-left-button row">
                      <a href=""><span> &#171;</span> Quay lại giỏ hàng</a>
                      <button type='submit' style={{fontWeight: "bold", height: "50px", width:"300px", marginLeft: "130px", marginTop: "20px"}}
                      onClick={handlePayment}>THANH TOÁN VÀ GIAO HÀNG</button>
                    </div>
                    </form>
                  </div>
                  
                  <div className="delivery-content-right">
<table>
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Giảm giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((cartItem) => (
      <tr key={cartItem.id}>
        <td id='name_product'>{cartItem.ten}</td>
        <td>30%</td>
        <td id='quantity'>1</td>
        <td>
          <p id='price_product'>{cartItem.gia}</p>
        </td>
      </tr>
    ))}
  </tbody>
  <tfoot>
    <tr>
      <td style={{fontWeight: "bold"}} colSpan="3">Tổng</td>
      <td style={{fontWeight: "bold"}}>
        <p>{calculateTotalPrice()}<sup>đ</sup></p>
      </td>
    </tr>
    <tr>
      <td style={{fontWeight: "bold"}} colSpan="3">Thuế VAT</td>
      <td style={{fontWeight: "bold"}}>
        <p>50.000<sup>đ</sup></p>
      </td>
    </tr>
    <tr>
      <td style={{fontWeight: "bold"}} colSpan="3">Tổng tiền hàng</td>
      <td style={{fontWeight: "bold"}}>
        <p id='total'>{calculateTotalAmount()}<sup>đ</sup></p>
      </td>
    </tr>
  </tfoot>
</table>
                  </div>
                </div>
              </div></form>
            </section>

    <footer style={{textAlign: "center", width: '100%', 
    height:"auto", lineHeight:'.5', fontSize:"16px", paddingTop:"10px"}}>
      <img className="logo_footer" src={"/image/logo.png"} alt="" />
      <p className="state">● Đang mở cửa </p>
      <p>CHU CHU - CHUỖI NHÀ HÀNG HÀNG ĐẦU VỀ HẢI SẢN TẠI HÀ NỘI</p>
      <p>▫️111, Thanh Xuân, Nguyễn Trãi, Hà Nội.</p>
      <p>▫️69, Xuân Thủy, Cầu Giấy, Hà Nội.</p>
      <p>▫️371D Nguyễn Cảnh Chân, Phường Nguyễn Cư Trinh Quận 1.</p>
      <p>▫️59 SONG HÀNH, P. AN PHÚ, TP THỦ ĐỨC, TP.HCM.</p>
      <p>☎ Hotline đặt bàn: 1900 633 650</p>
      <img className="fb_footer" src={""} alt="" />
    </footer>
          </>
    )
}

export default Cart;
   