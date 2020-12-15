import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Modal';

import useSound from 'use-sound';
import airhorn from '../audioclips/airhorn.mp3';

const ContinueModal = (props) => {
    const [show, setShow] = useState(false);
    const [play] = useSound(airhorn);

    const handleClose = () => {
        setShow(false);
        props.rerender();
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(!props.hasWon);
    }, []);

    return (
        <>

            <Modal show={show} onHide={() => {
                play();
                handleClose();
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Correct!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Next Level!</Modal.Body>
                <Button variant="secondary" onClick={handleClose}>
                    Close
            </Button>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ContinueModal;