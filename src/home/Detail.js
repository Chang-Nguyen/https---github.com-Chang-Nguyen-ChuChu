import React, { useEffect, useState } from "react";
import "../category_css/Demo.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaConciergeBell, FaFacebookF, FaTiktok} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Book from '../home/Book';
import { BiUserCircle } from "react-icons/bi";


const Detail = () => {
  const [count, setCount] = useState(0);
  const [productData, setProductData] = useState({});
  const [isFacebookHovered, setFacebookHovered] = useState(false);
  const [isTiktokHovered, setTiktokHovered] = useState(false);
  const [isInstagramHovered, setInstagramHovered] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
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

    const { id } = useParams();

      useEffect(() => {
        const fetchProductData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/product/${id}/`);
            setProductData(response.data);
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        };
    
        fetchProductData();
      }, [id]);
    
      const [name, setName] = useState('');
      const [rating, setRating] = useState('');
      const [review, setReview] = useState('');
    
      const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
      
      };

  return (
    
<div style={{backgroundColor:"ButtonFace"}}>
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
  <div className="container" style={{marginTop:"50px"}}>
    <div className="product-content row">
      <div className="product-content-left row">
        <div className="product-content-left-big-img">
          {productData.product_img1 && productData.product_img1.url && (
            <img src={productData.product_img1.url} alt={productData.product_name} />
          )}
        </div>
      </div>
      <div className="product-content-right">
        <div className="product-content-right-product-name">
          <h1>{productData.product_name}</h1>
          <p>SKU: {productData.id}</p>
        </div>
        <div className="product-content-right-bottom-content">
          <div className="product-content-right-bottom-content-gioithieu">
            {productData.product_info}<br /><br />
          </div>
        </div>
        <div className="product-content-right-product-price">
          <p>{productData.product_price}</p>
        </div>
        <div className="quantity">
          <p style={{ fontWeight: "bold" }}>Số Lượng : {count}</p>
          <button className="btn_sl btn_up" onClick={increment}>
            +
          </button>
          <button className="btn_sl btn_down" onClick={decrement}>
            -
          </button>
        </div>
        <p style={{ color: "red" }}>Vui lòng chọn sản phẩm</p>
        <div className="size">
            <span>Con 2.5Kg</span>
            <span>Con 2.9Kg</span>
            <span>Con 3.4Kg</span>
            <span>Con 2Kg</span>
            <span>Con 1.5Kg</span>
        </div>
        <div className="product-content-right-product-button" style={{ display: "flex" }}>
          <button className="fa-sharp fa-solid fa-cart-shopping" style={{ marginRight: "10px" }}>MUA HÀNG</button>
          <button style={{ fontSize: "14px" }}>TÌM TẠI CỬA HÀNG</button>
        </div>
        <div className="product-content-right-product-icon">
          <div className="product-content-right-product-icon-items">
            <i className="fa-solid fa-phone"></i>
            <p style={{ marginTop: "15px" }}>Hotline</p>
          </div>
          <div className="product-content-right-product-icon-items">
            <i className="fa-solid fa-comments"></i>
            <p style={{ marginTop: "15px" }}>Chat</p>
          </div>
          <div className="product-content-right-product-icon-items">
            <i className="fa-solid fa-envelope"></i>
            <p style={{ marginTop: "15px" }}>Mail</p>
          </div>
        </div>
        <div className="product-content-right-bottom">
          <div className="product-content-right-bottom-top">
            <i className="fa-sharp fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div >
  <hr></hr>
  </div>
  <form method='POST' action='/add_reviews'>
  <div style={{gridTemplateColumns: 'auto auto', padding: '20px'}}>
    <h2 style={{textAlign:'center'}}>Đánh giá sản phẩm</h2>
      <div style={{padding: "30px",justifyContent: 'center', display: 'flex',}}>
        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', borderRadius: '10px', border: '1px solid gray', padding: '20px' }}>
        <BiUserCircle style={{width:'50px', height:'50px', marginRight: "20px"}}/>
          <div style={{ marginBottom: '12px' }}>
            <input
              type="text"
              placeholder="Nhập họ tên "
              value={name}
              style={{width:'500px'}}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)} required
            />
            <div className="rating-container">
              {[1, 2, 3, 4, 5].map((value) => (
                <label
                  key={value}
                  id="star"
                  name="star"
                  className={`star ${value <= rating ? 'selected' : ''}`}
                  onClick={() => handleRatingClick(value)}
                  onChange={(e) => setRating(e.target.value)} required
                >
                  &#9733;
                </label>
              ))}
            </div>
            <div>
              <textarea
                placeholder="Nhập nội dung"
                style={{ backgroundColor: 'white', padding: '5px', borderRadius: '4px', width: '500px', height:'100px'}}
                value={review}
                id="note"
                name="note"
                onChange={(e) => setReview(e.target.value)} required></textarea>
            </div>
            <button style={{ backgroundColor: 'orange', color: 'white', borderRadius: '4px', cursor: 'pointer', width: "50px"}}>Gửi</button>
          </div>
        </div>
      </div>
    </div>
    </form>
</div>

  )
};

export default Detail;
