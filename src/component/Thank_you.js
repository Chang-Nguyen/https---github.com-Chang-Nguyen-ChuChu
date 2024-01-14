import { useParams, Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';

const ThankYou = () => {
  const { previousPath } = useParams();

  const handleButtonClick = () => {
    const path = previousPath || '/order';
    window.location.href = path;
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Đặt hàng thành công</Modal.Title>
          <Link to={previousPath || '/order'}>
            <Button variant="close" aria-label="Close">
            </Button>
          </Link>
        </Modal.Header>
        <Modal.Body>
          <p>Thank you for your purchase!</p>
        </Modal.Body>

        <Modal.Footer>
        <Link to={previousPath || '/order'}>
          <Button variant="primary">OK</Button>
        </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default ThankYou;
