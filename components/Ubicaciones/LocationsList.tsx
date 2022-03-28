import React from "react";
import Location from "./Location";


import imageLocation1 from "../../assets/ubicaciones/EDS Petrobras - Centro Comecial El Manantial.jpeg";
import imageLocation2 from "../../assets/ubicaciones/EDS Petromil B -183.jpeg";
import imageLocation3 from "../../assets/ubicaciones/EDS Petromil Bazar - 64.jpeg";
import imageLocation4 from "../../assets/ubicaciones/EDS Petromil Bazar - 65.jpeg";
import imageLocation5 from "../../assets/ubicaciones/EDS Petromil Bazar -134.jpeg";
import imageLocation6 from "../../assets/ubicaciones/EDS Terpel Bazar -151.jpeg";

export default function LocationsList() {
  const locations = [
    {
      name: "EDS PETROBRAS Centro Comercial El Manantial",
      address: "Peaje Patios Km 7 vía La Calera",
      locationWazeURL: "https://waze.com/ul/hd2g6ebg2n",
      locationGoogleMapsURL : "https://maps.app.goo.gl/sZeeyFRKiEe9huS56",
      image: imageLocation1,
    },
    {
      name: "EDS PETROMIL Bazar 183",
      address: "Calle 183 # 7 A - 57",
      locationWazeURL: "https://waze.com/ul/hd2g756w92",
      locationGoogleMapsURL : "https://maps.app.goo.gl/W63d8fWFBEw2U8LH9",
      image: imageLocation2,
    },
    {
      name: "EDS PETROMIL Bazar 64",
      address: "Avenida Boyacá # 64 B - 16",
      locationWazeURL: "https://waze.com/ul/hd2g69g2km",
      locationGoogleMapsURL : "https://maps.app.goo.gl/SjKK3MJ2fbmdpq39A",
      image: imageLocation3,
    },
    {
      name: "EDS PETROMIL Bazar 65",
      address: "Avenida 30 NQS 64 A - 89",
      locationWazeURL: "https://waze.com/ul/hd2g6d26qg",
      locationGoogleMapsURL : "https://maps.app.goo.gl/G9j5eJxbLjn3RTpSA",
      image: imageLocation4,
    },
    {
      name: "EDS TERPEL Bazar 134",
      address: "Calle 134 # 49 - Esquina",
      locationWazeURL: "https://waze.com/ul/hd2g6fg482",
      locationGoogleMapsURL : "https://maps.app.goo.gl/CP2YgrrMzx6HisbP9",
      image: imageLocation5,
    },
    {
      name: "EDS PETROMIL Bazar 151",
      address: "Avenida 19 # 151 - 23",
      locationWazeURL: "https://waze.com/ul/hd2g6gjdhp",
      locationGoogleMapsURL : "https://maps.app.goo.gl/Cqd8qF35nGM3zCnd9",
      image: imageLocation6,
    },
  ];

  return (
    <div className="flex flex-col justify-between">
      {locations.map(({ name, image, address, locationWazeURL,locationGoogleMapsURL },index) => (
        <Location
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
