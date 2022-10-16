/*import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";*/

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";

export const CarouselWrapper = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const carouselImages = [{
    alt : 'First slide',
    width : "1920px",
    height : "1080px",
    src : image1
  },{
    alt : 'Second slide',
    width : "1920px",
    height : "1080px",
    src : image2
  },
  {
    alt : 'Third slide',
    width : "1920px",
    height : "1080px",
    src : image3
  },
  {
    alt : 'Fourth slide',
    width : "1920px",
    height : "1080px",
    src : image4
  }]

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {carouselImages.map(({alt,width,height,src})=>{
        return(
          <Carousel.Item interval={6000}>
          <Image
            src={src}
            className="d-block w-100"
            alt={alt}
            width={width}
            height={height}
          />
        </Carousel.Item>
        )
      })}
    </Carousel>
  );
};
