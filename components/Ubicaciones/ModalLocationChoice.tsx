import React from "react";
import { Button, Modal } from "react-bootstrap";

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
          Elección sitio web
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Con cual sitio web quieres abrir la ubicación?</p>
      </Modal.Body>
      <Modal.Footer>
        <a href={props.locationGoogleMapsURL} target="_blank">
          <Button variant="danger" onClick={props.onHide}>
            Google Maps
          </Button>
        </a>
        <a href={props.locationWazeURL} target="_blank">
          <Button variant="danger" onClick={props.onHide}>
            Waze
          </Button>
        </a>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalLocationChoice;
