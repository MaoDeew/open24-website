import Image from "next/image";
import logo from "../assets/logo.png";

interface LogoProps {
  additionalClassName?: string;
  width : number,
  height: number,
  isMobile?: boolean,
  inFooter?: boolean,
}

export const Logo = ({additionalClassName, width, height, isMobile, inFooter}: LogoProps) => {
  return (
    <div className={"self-center "+additionalClassName} style={{ width: isMobile ? "100%" : inFooter ? "35%" : "15%", marginTop: isMobile ? 20 : 0 }}>
      <Image className="cursor-pointer" src={logo} width={width+" px"} height={height+" px"} alt='open24-logo'/>
    </div>
  );
};
