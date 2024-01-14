import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../category_css/Book.css';

const Book = ({ isOpen, closeModal }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [facility, setFacility] = useState('');
    const [adults, setAdults] = useState('');
    const [children, setChildren] = useState('');
    const [note, setNote] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const facilities = ['Chuchu Nguyễn Trãi - Hà Nội', 
    'ChuChu Xuân Thủy - Hà Nội', 
    'ChuChu Nguyễn Cảnh Chân - Hồ Chí Minh',
    'ChuChu An Phú - Hồ Chí Minh'];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Đặt bàn"
      style={{
        content: {
          width: '600px',
          margin: '0 auto',
          border: '2px solid orange',
          height: '600px',
          backgroundSize: '100% 100%',
        },
      }}
    >
      <form method='POST' action='/add_book'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="name" style={{ color: 'black' }}>Họ và tên</label>
            <input type="text" className="form-control" id="name" name="name" style={{ width: '80%' }} 
            onChange={(e) => setName(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="phone" style={{ color: 'black' }}>Số điện thoại</label>
            <input type="text" className="form-control" id="phone" name="phone" style={{ width: '80%' }} 
            onChange={(e) => setPhone(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="date" style={{ color: 'black' }}>Ngày</label>
            <input type="date" className="form-control" id="date" name="date" style={{ width: '80%' }} 
            onChange={(e) => setDate(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="time" style={{ color: 'black' }}>Giờ</label>
            <input type="time" className="form-control" id="time" name="time" style={{ width: '80%' }} 
            onChange={(e) => setTime(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="facility" style={{ color: 'black' }}>Chọn cơ sở</label>
            <select className="form-control" id="facility" name="facility" style={{ width: '80%' }} 
            onChange={(e) => setFacility(e.target.value)} required>
              <option value="">Chọn cơ sở</option>
              {facilities.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
              ))}
            </select>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="adults" style={{ color: 'black' }}>Người lớn</label>
            <input type="number" className="form-control" id="adults" name="adults" style={{ width: '80%' }} 
            onChange={(e) => setAdults(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="children" style={{ color: 'black' }}>Trẻ em</label>
            <input type="number" className="form-control" id="children" name="children" style={{ width: '80%' }} 
            onChange={(e) => setChildren(e.target.value)} required/>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <label htmlFor="note" style={{ color: 'black' }}>Ghi chú</label>
            <textarea className="form-control" id="note" name="note" style={{ width: '80%' }} 
            onChange={(e) => setNote(e.target.value)} required/>
          </div>
        </div>
        <button type="submit" className="btn" style={{ alignSelf: 'center' }} >ĐẶT BÀN</button>
      </form>
    </Modal>
  );
};

export default Book;
