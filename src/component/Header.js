import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import "../category_css/Header.css"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaConciergeBell, FaFacebookF, FaTiktok} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Book from '../home/Book';


const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };

    const [isFacebookHovered, setFacebookHovered] = useState(false);
    const [isTiktokHovered, setTiktokHovered] = useState(false);
    const [isInstagramHovered, setInstagramHovered] = useState(false);

    return (
        <Navbar expand="lg" >
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
                <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/introduce">Giới thiệu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/franchise">Nhượng quyền</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/news">Tin tức</NavLink>
                        </li>
                    </ul>
                <div class="menu1 d-flex flex-wrap justify-content-between align-items-center">
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
                        color: isFacebookHovered ? 'orange' : 'white'
                        }} size={18}
                           onMouseOver={() => setFacebookHovered(true)}
                           onMouseOut={() => setFacebookHovered(false)}/></a>
            
                       <a href="https://www.tiktok.com/@pamyeuoi?_t=8i1oAV28Eks&_r=1" target="_blank">
                       <FaTiktok   
                        style={{ 
                        verticalAlign: 'middle',
                        marginBottom: '5px',
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;