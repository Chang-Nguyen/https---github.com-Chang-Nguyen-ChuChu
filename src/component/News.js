import Header from "./Header";
import React, { useState, useEffect } from 'react';
import "../category_css/Introduce.css"
import Footer from "./Footer";
import Phone1 from "../phone/Phone1";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { Link } from "react-router-dom";

function  News() {

  const [listblog, setListblog] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/blog")
      .then(res => {
        setListblog(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
     <>
     <Header />
     <div style={{backgroundColor: 'black'}}>
     <img src="/image/bgdimage.jpg" 
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
        <p>TIN TỨC</p>
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


      <div className="image">
      <Row xs={2} md={3} className="row-cols-1 row-cols-md-3 g-4" style={{marginLeft:'100px', marginRight:'100px', marginBottom:'50px'}}>
      {Array.isArray(listblog) && listblog.length > 0 && listblog.map(item => (
        <Link to={`/new/${item.id}`}>
        <Col key={item.id}>
          <Card style={{height:'500px'}}>
            <Card.Img variant="top" src={item.blog_img.url} height="100px" width="100px" style={{ height: '300px', width: '100%' }}/>
            <Card.Body>
              <Card.Title>{item.blog_name}</Card.Title>
              <Card.Text>{item.blog_info}</Card.Text>
            </Card.Body>
          </Card>
        </Col></Link>
      ))}
      </Row> 
      </div>

    <Phone1 />
    <Footer />
     </>
  )
}
export default News;