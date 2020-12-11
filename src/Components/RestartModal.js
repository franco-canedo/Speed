import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

const RestartModal = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
        window.location.reload(true);
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.hasLost);
    }, []);
  
    return (
      <>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>You Lost!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Better luck next time...</Modal.Body>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          <Modal.Footer>
            
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default RestartModal;

