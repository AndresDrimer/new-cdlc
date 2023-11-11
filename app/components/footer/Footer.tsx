"use client";
import { useLocationContext } from "@/app/context/LocationContext";
import Image from "next/image";
import React from "react";
import {
  BsTelephone,
  BsAt,
  BsGeoAlt,
  BsHouseHeart,
  BsFacebook,
  BsInstagram,
  BsSend,
} from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import UpperPartFooter from "./UpperPartFooter";
import Contacts from "./Contacts";
import LogosContainer from "./LogosContainer";
import Social from "./Social";

export const footerData = {
  address: "Godoy Cruz 1653 - CABA",
  tel: "+549.116.0517",
  mail: "librerias@cafedelasciudades.com.ar",
  url: "https://cafedelasciudades.com.ar",
  facebook: "https://www.facebook.com/profile.php?id=100045277586300",
  instagram: "https://www.instagram.com/cafe.de.las.ciudades/",
};

function Footer() {
  const { isInArgentina } = useLocationContext();

  return (
    <footer className="w-full flex items-center px-4 py-2 mt-2 ">
      <div className="w-full flex flex-col justify-center 2xl:mx-20 ">
        <UpperPartFooter />

        <div className="border-t lg:flex lg:flex-row lg:justify-between">
          <Contacts />
          <LogosContainer />
          <Social />
        </div>

      </div>
    </footer>
  );
}

export default Footer;
