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
  const [blogData, setBlogData] = useState({});
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
        const fetchBlogData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:5000/blog/${id}/`);
            setBlogData(response.data);
          } catch (error) {
            console.error("Error fetching product data:", error);
          }
        };
    
        fetchBlogData();
      }, [id]);
    

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
          {blogData.blog_img && blogData.blog_img.url && (
            <img src={blogData.blog_img.url} alt={blogData.blog_name} />
          )}
        </div>
      </div>
      <div className="product-content-right" style={{paddingLeft:'10px', borderLeft:'2px solid gray'}}>
        <div className="product-content-right-product-name">
          <h1>{blogData.blog_name}</h1>
        </div>
        <div className="product-content-right-bottom-content">
          <div className="product-content-right-bottom-content-gioithieu">
            {blogData.blog_info}<br /><br />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div >
  <hr></hr>
  </div>
</div>

  )
};

export default Detail;
