/*import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";*/

import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import image9 from "../../assets/image9.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image12 from "../../assets/image12.png";
import image13 from "../../assets/image13.png";


export const CarouselWrapper = () => {
  const [index, setIndex] = useState(0);


  const handleSelect = (selectedIndex: number, e: any) => {
    setIndex(selectedIndex);
  };

  const carouselImages = [/*{
    alt : 'First slide',
    width : "1920px",
    height : "1080px",
    src : image1
  },*/{
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
  },
  {
    alt : 'Fifth slide',
    width : "1920px",
    height : "1080px",
    src : image5
  },
  {
    alt : 'Sixth slide',
    width : "1920px",
    height : "1080px",
    src : image6
  },
  {
    alt : 'Seventh slide',
    width : "1920px",
    height : "1080px",
    src : image7
  },
  {
    alt : 'Eigth slide',
    width : "1920px",
    height : "1080px",
    src : image8
  },
  {
    alt : 'Ninth slide',
    width : "1920px",
    height : "1080px",
    src : image9
  },
  {
    alt : 'Tenth slide',
    width : "1920px",
    height : "1080px",
    src : image10
  },
  {
    alt : 'Eleventh slide',
    width : "1920px",
    height : "1080px",
    src : image11
  },
  {
    alt : 'Twelveth slide',
    width : "1920px",
    height : "1080px",
    src : image12
  },
  {
    alt : 'Thirteenth slide',
    width : "1920px",
    height : "1080px",
    src : image13
  }]

  const carouselItemVideo = () =>{
    return(<Carousel.Item interval={35000}>
      <video id='video' width={1920} height={1080} autoPlay muted loop>
          <source src='juanValdezVideo.webm' type="video/webm" />
        </video>
    </Carousel.Item>)
  }


  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {/*carouselItemVideo()*/}
      {carouselImages.map(({alt,width,height,src})=>{
        return(
          <Carousel.Item key={alt+src} interval={6000}>
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
