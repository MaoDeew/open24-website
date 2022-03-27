/*import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";*/

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";

export const CarouselWrapper = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item interval={6000}>
        {/*<img
          className="d-block w-100"
          src="https://fondosmil.com/fondo/11771.jpg"
         src="https://fondosmil.com/fondo/11771.jpg"
          alt="First slide"
        />*/}
        <Image
          src={image1}
          className="d-block w-100"
          alt="First slide"
          width="1920px"
          height="1080px"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
        <Image
          className="d-block w-100"
          src={image2}
          alt="Second slide"
          width="1920px"
          height="1080px"
        />
      </Carousel.Item>
      <Carousel.Item interval={6000}>
      <Image
          className="d-block w-100"
          src={image3}
          alt="Third slide"
          width="1920px"
          height="1080px"
        />
      </Carousel.Item>
    </Carousel>
  );
};
