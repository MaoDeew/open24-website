import Image from "next/image";
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import ModalLocationChoice from "./ModalLocationChoice";

interface LocationProps {
  title: string;
  address: string;
  image: any;
  locationWazeURL: string;
  locationGoogleMapsURL : string;
  deviceType: string;
}

export default function Location({
  title,
  address,
  image,
  locationWazeURL,
  locationGoogleMapsURL,
  deviceType
}: LocationProps) {


const [modalShow, setModalShow] = useState(false);

const isMobile = deviceType === "mobile";

  return (
    <Card style={{ marginBottom: 30 }}>
      <Card.Header style={{fontWeight: 'bold', fontSize: 18}}>{title}</Card.Header>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold', fontSize: 16}} className='flex flex-col'>
          {address}
        </Card.Title>
        <div className="flex flex-col">
          <div>
            <Image
              src={image}
              className="d-block w-100"
              alt="First slide"
              width={isMobile ? "480px" : "1100px"}  
              height={isMobile ? "270px" : "500px"}
            />
          </div>
          <div /*className="md:ml-3"*/>
            <Button variant="danger" className="w-52" onClick={() => setModalShow(true)}>
              Abrir Ubicación
            </Button>
            <ModalLocationChoice
              show={modalShow}
              onHide={() => setModalShow(false)}
              locationWazeURL={locationWazeURL}
              locationGoogleMapsURL={locationGoogleMapsURL}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
