import Head from "next/head";
import { ReactChild, ReactChildren, useEffect, useState } from "react";
import { Logo } from "./Logo";
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
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export const Layout = ({ children, deviceType }: AuxProps) => {
  const isMobile = deviceType === "mobile";
  return (
    <>
      <Head>
        <title>Open24</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col">
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
        <footer className="p-4 bg-zinc-500 rounded-lg shadow">
          <div className="flex container justify-between">
            <Link href="/" passHref>
              <div
                className="flex items-center mb-4 sm:mb-0"
                style={{ marginTop: -33 }}
              >
                <Logo
                  additionalClassName="mr-3 h-8"
                  width={500}
                  height={250}
                  isMobile={isMobile}
                />
              </div>
            </Link>
            <ul className="flex items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=3102503692&text&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6 "
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Open24maquinasdispensadoras/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/open24vending/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/open24vending1"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 no-underline text-white text-3xl hover:underline md:mr-6 "
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <Link href="" passHref>
              <span className="no-underline text-white sm:text-center hover:underline">
                Open24™
              </span>
            </Link>
            . Todos los derechos reservados
          </span>
        </footer>
      </div>
    </>
  );
};
