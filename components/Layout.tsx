import Head from "next/head";
import { ReactChild, ReactChildren, useEffect, useState } from "react";
import { LogoFooter } from "./LogoFooter";
import { NavBar } from "./NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AuxProps {
  children: ReactChild | ReactChildren;
  deviceType: "desktop" | "mobile";
}

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Layout = ({ children, deviceType }: AuxProps) => {
  const isMobile = deviceType === "mobile";
  return (
    <>
      <Head>
        <title>Open24</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Open24 - Café, Snacks, Bebidas y mucho más..." key="title" />
        <meta property="og:image" content="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f8adc8c8.png&w=384&q=75" key="logo" />
      </Head>
      <div className="flex flex-col" style={{}}>
        <NavBar
          title="Open 24"
          subtitle="Café, Snacks, Bebidas y mucho más..."
          deviceType={deviceType}
        />
        <div>
          <div className="bg-gray-100 p-10">
            <div className="container mx-auto h-full">{children}</div>
          </div>
        </div>
        <footer className={isMobile ? "pb-4 pt-2 px-2 bg-zinc-500 rounded-lg shadow" : "pb-4 pt-2 px-10 h-48 bg-zinc-500 rounded-lg shadow"}>
          <div className="flex flex-col">
            <div className="container">
              <div className="flex justify-between items-center">
                <div className="">
                  {isMobile ? <LogoFooter width={100} height={50} /> : <LogoFooter width={200} height={100} />}
                  
                </div>
                <div />
                <div className=" flex">
                  <div>
                    <a
                      href="https://api.whatsapp.com/send/?phone=573102503692&text&app_absent=0"
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6 "
                    >
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/Open24maquinasdispensadoras/"
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/open24vending/"
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://twitter.com/open24vending1"
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6 "
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UC1F8wQmDyI-SHu7g18WSXtg"
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6 "
                    >
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "1px solid black;" }} />
            <div className="container flex justify-center">
              <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2022{" "}
                <Link href="" passHref>
                  <span className="no-underline text-white sm:text-center hover:underline">
                    Open24™
                  </span>
                </Link>
                . Todos los derechos reservados
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
