import Image from "next/image";
import imageColombina from "../../assets/brands/colombina.png";
import imageBimbo from "../../assets/brands/bimbo.png";
import imageCocaCola from "../../assets/brands/coca-cola.png";
import imageFritolay from "../../assets/brands/fritolay.png";
import imagePostobon from "../../assets/brands/postobon.png";
import imageRamo from "../../assets/brands/ramo.png";
import imageTosh from "../../assets/brands/tosh.png";
import imageCifrut from "../../assets/brands/cifrut.jpeg";
import imageCorona from "../../assets/brands/corona.png";
import imageCafeQuindio from "../../assets/brands/cafeQuindio.png";
import imageNatyPastel from "../../assets/brands/natyPastel.png";
import imageSuperRicas from "../../assets/brands/superRicas.png";
import imageGrupoNutresa from "../../assets/brands/grupoNutresa.png";
import imageQuala from "../../assets/brands/quala.png";
import imagePiquitos from "../../assets/brands/piquitos.png";
import imageMonteArroyo from "../../assets/brands/monteArroyo.png";
import imagePepsico from "../../assets/brands/pepsico.png";
import imageHindu from "../../assets/brands/hindu.png";
import imageNestle from "../../assets/brands/nestle.png";
import imageOma from "../../assets/brands/oma.png";
import imageMayaguez from "../../assets/brands/mayaguez.png";
import { useWindowSize } from "../../hooks/useWindowSize";

interface BrandsProps {
  additionalClassName?: string;
  deviceType?: "desktop" | "mobile";
}

export const Brands = ({ additionalClassName, deviceType }: BrandsProps) => {
  const listBrands = [
    {
      name: "Colombina",
      image: imageColombina,
    },
    {
      name: "Bimbo",
      image: imageBimbo,
    },
    {
      name: "Coca-Cola",
      image: imageCocaCola,
    },
    {
      name: "Fritolay",
      image: imageFritolay,
    },
    {
      name: "Postobón",
      image: imagePostobon,
    },
    {
      name: "Ramo",
      image: imageRamo,
    },
    {
      name: "Tosh",
      image: imageTosh,
    },
    {
      name: "Oma",
      image: imageOma,
    },
    {
      name: "Cifrut",
      image: imageCifrut,
    },
    {
      name: "Corona",
      image: imageCorona,
    },
    {
      name: "Cafe Quindio",
      image: imageCafeQuindio,
    },
    {
      name: "Naty Pastel",
      image: imageNatyPastel,
    },
    {
      name: "Super Ricas",
      image: imageSuperRicas,
    },
    {
      name: "Grupo Nutresa",
      image: imageGrupoNutresa,
    },
    {
      name: "Quala",
      image: imageQuala,
    },
    {
      name: "Piquitos",
      image: imagePiquitos,
    },
    {
      name: "Monte Arroyo",
      image: imageMonteArroyo,
    },
    {
      name: "Pepsico",
      image: imagePepsico,
    },
    {
      name: "Hindú",
      image: imageHindu,
    },
    {
      name: "Nestlé",
      image: imageNestle,
    },
    {
      name: "Mayagüez",
      image: imageMayaguez,
    },
  ];

  const { width, height } = useWindowSize();
  
  const calculationWidthBrandsAnimation = () => {
    if (width >= 800 && width < 1300) {
      return width * 2.5;
    }

    if (width < 800) {
      return width * 12.5;
    }

    return width * 2;
  };

  return (
    <div className="h-36" style={{ marginTop: -35/*, marginBottom: 45*/ }}>
      <span
        className="w-full text-red-500 text-3xl font-bold flex"
        style={{ marginBottom: 10 }}
      >
        PROVEEDORES
      </span>
      <div className="container overflow-x-hidden">
        <div
          className="brands-animation"
          style={{
            width: calculationWidthBrandsAnimation(),
          }} /*style={{width : 'calc('+(calculationWidthBrandsAnimation)+'rem - '+width+'px)'}}*/
        >
          {listBrands.map(({ name, image }) => (
            <div
              key={name + "-" + image}
              className="w-56 flex justify-center p-2 bg-white mx-2 rounded-md" /*style={{flex : 1}}*/
            >
              {/*<Image
                layout="fixed"
                width="280px"
                height="105px"
                src={image}
                alt={name}
          />*/}
              <Image
                layout="fixed"
                width="100px"
                height="55px"
                src={image}
                alt={name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
