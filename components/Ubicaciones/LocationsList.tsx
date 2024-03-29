import React from "react";
import Location from "./Location";


import imageLocation1 from "../../assets/ubicaciones/EDS Petrobras - Centro Comecial El Manantial.png";
import imageLocation2 from "../../assets/ubicaciones/EDS Petromil B -183.png";
import imageLocation3 from "../../assets/ubicaciones/EDS Petromil Bazar - 64.jpeg";
import imageLocation4 from "../../assets/ubicaciones/EDS Petromil Bazar - 65.jpeg";
import imageLocation5 from "../../assets/ubicaciones/EDS Petromil Bazar -134.jpeg";
import imageLocation6 from "../../assets/ubicaciones/EDS Terpel Bazar -151.jpeg";

export default function LocationsList({deviceType}: any) {
  const locations = [
    {
      name: "EDS PETROBRAS Centro Comercial El Manantial",
      address: "Peaje Patios Km 7 vía La Calera",
      locationWazeURL: "https://waze.com/ul/hd2g6ebg2n",
      locationGoogleMapsURL : "https://maps.app.goo.gl/qzbQ6HmFXjbNLiee9",
      image: imageLocation1,
    },
    {
      name: "EDS PETROMIL Bazar 183",
      address: "Calle 183 #7A-57 Bogotá",
      locationWazeURL: "https://waze.com/ul/hd2g756w92",
      locationGoogleMapsURL : "https://maps.app.goo.gl/wiHbhNG4hP4uUTNE7",
      image: imageLocation2,
    },
    {
      name: "EDS PETROMIL Bazar 64",
      address: "Avenida Boyacá #64B-16 Bogotá",
      locationWazeURL: "https://waze.com/ul/hd2g69g2km",
      locationGoogleMapsURL : "https://maps.app.goo.gl/MW19dJ2B2nXL1f2x8",
      image: imageLocation3,
    },
    {
      name: "EDS PETROMIL Bazar 65",
      address: "Avenida 30 NQS 64A-89 Bogotá",
      locationWazeURL: "https://waze.com/ul/hd2g6d26qg",
      locationGoogleMapsURL : "https://maps.app.goo.gl/orUKFqdmbhC2i3pP6",
      image: imageLocation4,
    },
    {
      name: "EDS TERPEL Bazar 134",
      address: "Calle 134 #49-Esquina Bogotá",
      locationWazeURL: "https://waze.com/ul/hd2g6fg482",
      locationGoogleMapsURL : "https://maps.app.goo.gl/KxFJ5m93zJWtXoAB7",
      image: imageLocation5,
    },
    {
      name: "EDS PETROMIL Bazar 151",
      address: "Avenida 19 #151-23 Bogotá",
      locationWazeURL: "https://waze.com/ul/hd2g6gjdhp",
      locationGoogleMapsURL : "https://maps.app.goo.gl/qawWka851DtjLgHFA",
      image: imageLocation6,
    },
  ];

  return (
    <div className="flex flex-col justify-between">
      {locations.map(({ name, image, address, locationWazeURL,locationGoogleMapsURL },index) => (
        <Location
          deviceType={deviceType}
          key={name+" - "+address+" - "+index}
          title={name}
          address={address}
          image={image}
          locationWazeURL={locationWazeURL}
          locationGoogleMapsURL={locationGoogleMapsURL}
        />
      ))}
    </div>
  );
}
