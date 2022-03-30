import React from "react";
import { Button, Modal } from "react-bootstrap";

import {
    faGoogle,
    faWaze
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ModalLocationChoice(props: any) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            ¿Cómo quieres ir tu tienda automática elegida?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex justify-evenly">
          <a
            href={props.locationGoogleMapsURL}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="danger" className='flex' style={{width: 150}} onClick={props.onHide}>
                <FontAwesomeIcon icon={faGoogle} size='2x' />
                <div>Google Maps</div>
            </Button>
          </a>
          <a href={props.locationWazeURL}  target="_blank" rel="noreferrer">
            <Button variant="danger" className='flex' style={{width: 150}} onClick={props.onHide}>
                <FontAwesomeIcon icon={faWaze} size='2x' />
                <div>Waze</div>
            </Button>
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default ModalLocationChoice;
