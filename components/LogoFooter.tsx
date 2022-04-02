import Image from "next/image";
import logo from "../assets/logo.png";

interface LogoProps {
    width: number;
    height: number;
}

export const LogoFooter = ({width, height}: LogoProps) => {
  return (
      <Image className="cursor-pointer" src={logo} width={width+" px"} height={height+" px"} alt='open24-logo'/>
  );
}