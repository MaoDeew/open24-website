import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

interface NavBarProps {
  title: string;
  subtitle: string;
  deviceType: "desktop" | "mobile";
}

export const NavBar = ({ title, subtitle, deviceType }: NavBarProps) => {
  const [showMenuItemsMobile, setShowMenuItemsMobile] = useState(false);
  const router = useRouter();

  const handleHamburgerClick = () => {
    setShowMenuItemsMobile(!showMenuItemsMobile);
  };

  const isMobile = deviceType === "mobile";

  return (
    <>
      <nav className="bg-white border-black px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          {isMobile ? (
            <Link href="/" passHref>
              <Logo
                width={200}
                height={85}
                isMobile={true}
                additionalClassName="flex justify-center"
              />
            </Link>
          ) : (
            <Link href="/" passHref>
              <Logo width={180} height={85} isMobile={false} />
            </Link>
          )}
          <p
            style={{
              marginBottom: 0,
              fontWeight: "bold",
              fontSize: isMobile ? 18 : 29,
            }}
            className="md:flex text-sm md:text-xl md:py-5"
          >
            {subtitle}
          </p>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => handleHamburgerClick()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={
              "w-full md:block md:w-auto " +
              (showMenuItemsMobile ? "" : "hidden")
            }
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/" passHref>
                  <span
                    className={
                      "block py-2 pr-4 pl-3 text-xl cursor-pointer " +
                      (router.pathname === "/" ? "text-red-500" : "")
                    }
                    style={{ fontWeight: "bold" }}
                    aria-current="page"
                  >
                    Inicio
                  </span>
                </Link>
              </li>
              <li>
                <span
                  onClick={() => window.location.replace("/#ubicaciones")}
                  className={
                    "block py-2 pr-4 pl-3 text-xl cursor-pointer " +
                    (router.pathname === "/ubicaciones" ? "text-red-500" : "")
                  }
                  style={{ fontWeight: "bold" }}
                >
                  Nuestros Puntos
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
