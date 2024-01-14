import 'bootstrap/dist/css/bootstrap.css';
import '../category_css/Order.css';
import React, {useEffect, useState} from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaTiktok, FaSearch} from "react-icons/fa";
import Image from './Image';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


function Order(){
  
  const [listseafood, setListseafood] = useState([]);
  const [category, setCategory] = useState([]);
  const [cate, setCate] = useState('');
  const facilities = ['Chuchu Nguyễn Trãi - Hà Nội', 
    'ChuChu Xuân Thủy - Hà Nội', 
    'ChuChu Nguyễn Cảnh Chân - Hồ Chí Minh',
    'ChuChu An Phú - Hồ Chí Minh'];

  console.log(cate);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/product")
      .then(res => {
        setListseafood(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/order")
      .then(res => {
        setCategory(res.data);
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [fileSearchShow, setFileSearchShow] = useState(false);
  const [cartShow, setCartShow] = useState(false);

  const handleFileSearchClose = () => setFileSearchShow(false);
  const handleFileSearchShow = () => {
    setFileSearchShow(true);
    setCartShow(false); 
  }; 

  const handleAddToCart = (item) => {
    const imageUrl = item.product_img1 ? item.product_img1.url : '';

    const newItem = {
      id: item.id,
      anh: imageUrl,
      ten: item.product_name,
      gia: item.product_price,
    };

    setCartItems([...cartItems, newItem]);
    setCartShow(true);
    console.log(cartShow);
    // navigate('/cart', { state: { cartItems: [newItem] } });
  };

  const [cartItems, setCartItems] = useState([]);

  const handleCartShow = () => {
    setCartShow(true);
  };

  const handleCartClose = () => {
    setCartShow(false);
  };

  const [count, setCount] = useState(1);
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

  const [isOffCanvasVisible, setOffCanvasVisible] = useState(false);

  const deleteItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    if (updatedCartItems.length === 0) {
      setOffCanvasVisible(false);
    }
  };
   
  const handleAddItem = () => {
    window.location.href = '/order';
  };

  const navigate = useNavigate();

  const handlePaymentClick = () => {
    // Perform any necessary logic before navigating
    // ...

    // Navigate to the "/cart" page and pass cartItems as state
    navigate('/cart', { state: { cartItems } });
  };

  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{margin: '0 100px 0 160px'}}>
      <a className="navbar-brand logo" href="/"><img src={"/image/logo.png"} alt='' /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <select className="form-select select-css address" aria-label="Default select example">
          <option selected> Chọn địa điểm</option>
          {facilities.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
      </select>
      <select className="form-select select-css giaohang" aria-label="Default select example">
          <option selected>Chọn phương thức</option>
          <option value="1"> Giao hàng</option>
          <option value="2"> Đến lấy</option>
      </select>
      <li className="ic">
          <AiOutlineFileSearch size={24} onClick={handleFileSearchShow} />
          <Offcanvas show={fileSearchShow} onHide={handleFileSearchClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Lịch sử đơn hàng</Offcanvas.Title>
            </Offcanvas.Header>
            <hr style={{ marginLeft: '15px', marginRight: '15px' }} />
            <Offcanvas.Body>
            <InputGroup style={{ width:'100%' }}>
              <Form.Control placeholder="Số điện thoại"
                            aria-describedby="basic-addon2"
                            style={{height:'50px',width:'60%'}}/>
              <Button style={{bottom:'20px', height:'50px', width:'30%', backgroundColor:'orangered', border:'none'}}>
                Tìm kiếm
              </Button>
            </InputGroup>
            </Offcanvas.Body>
          </Offcanvas>
        </li>
        <li className="ic">
        <BsCart4 size={24} onClick={handleCartShow} />
        <Offcanvas show={cartShow} onHide={handleCartClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
        </Offcanvas.Header>
        <hr style={{ marginLeft: '15px', marginRight: '15px' }} />
        <Offcanvas.Body style={{ textAlign: 'center' }}>
          {cartItems.length === 0 ? (
            "Giỏ hàng đang trống. Vui lòng quay lại trang chủ để tiếp tục mua hàng."
          ) : (
<div>
{cartItems.map((cartItem) => ( <div>
  <div className="cart-item" key={cartItem.id}>
    <div className="cart-item__left">
      <img src={cartItem.anh} className="cart-item-image" />
    </div>
    <div className="cart-item__right">
    <div className="piq">
      <div className="cart-item-content-name">
        <span className="cart-item-content-name-detail">
          {cartItem.ten}
        </span>
      </div>
      <div className="bts" onClick={() => deleteItem(cartItem.id)}>
        <MdDeleteOutline style={{width:'20px', height:'20px', marginTop:'10px'}}/>
      </div></div>
      <div className="piq">
      <div className="quantity">   
          <button className="btn_sl btn_up" onClick={increment}>
            +
          </button>
          <p style={{fontWeight: "bold", marginLeft:'6px', marginTop:'2px'}}>{count}</p>
          <button className="btn_sl btn_down" onClick={decrement}>
            -
          </button>
        </div>
        <div className="cart-item-price">
          <span className="cart-item-price-content">{cartItem.gia}</span>
        </div>
      </div>
    </div>
  </div><hr></hr></div>
))}
</div>
          )}
        </Offcanvas.Body>
        <div className='foter'>
            <button className='custom-button-outline-orange' onClick={handleAddItem}>THÊM MÓN</button>
            <span className='button-spacing'></span>
            <Link to="/cart" className='custom-button-orange'
            onClick={handlePaymentClick}
           >THANH TOÁN</Link>     
        </div>
      </Offcanvas>
      </li>
      <li className="ic"><FaTiktok size={24}/> </li>
    </nav>

      <section >
      <div className="img_banner">
          <img src={"/image/banner.jpg"} alt="" />
      </div>
      </section>

      <div>
      <Image />
      </div>
   
  <div className="list_menu d-flex">

  <ul className="wrapper flex flex-row gap-4" style={{display:"flex"}}>
      {category.map(cate => (
        <li className="item px-4 py-2 " style={{borderRadius:'10px'}} onClick={(e) => setCate(e.target.value)} value={cate.category_name}>{cate.category_name}</li>
      ))}
  </ul>
  <form className="search d-flex ml-4">
  <div className="search-wrapper">
    <FaSearch className="search-icon" />
    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
  </div>
</form>
  </div>
 


  <div className='list_product'>
      <div className="main_list_product" style={{ display: 'flex', flexWrap: 'wrap', width: '110%' }}>
        {listseafood.map(item => (
            <div className="cartegory-right-content-item" key={item.id} style={{ width: '20%', height:'400px', boxSizing: 'border-box', padding: '10px' }}>
              <Link to={`/detail/${item.id}`} key={item.id} style={{ width: '35%', boxSizing: 'border-box', padding: '10px', position: 'relative' }}>
              <img src={item.product_img1.url} alt={item.product_name}></img>
              <h1>{item.product_name}</h1>
              <p>{item.product_price}</p></Link>
              <button className="add_to_cart" onClick={() => handleAddToCart(item)}>THÊM VÀO GIỎ</button>
              <Link to="/cart"><button className="buy_now">MUA NGAY</button></Link>
            </div>
        ))}
      </div>
      
    </div>
   
   

    <footer style={{textAlign: "center", width: '100%', marginTop:"10%", borderTop:"1px solid #000000", 
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

export default Order;