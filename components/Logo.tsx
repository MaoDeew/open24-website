import Image from "next/image";
import logo from "../assets/logo.png";

interface LogoProps {
  additionalClassName?: string;
  width : number,
  height: number,
  isMobile?: boolean
}

export const Logo = ({additionalClassName, width, height, isMobile}: LogoProps) => {
  return (
    <div className={"self-center "+additionalClassName} style={{ width: isMobile ? "100%" : "35%" }}>
      <Image className="cursor-pointer" src={logo} width={width+" px"} height={height+" px"} alt='open24-logo'/>
    </div>
  );
};
