"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { RxAvatar } from "react-icons/rx";
import { RiSettings3Fill } from "react-icons/ri";
import argentinaLogo from "@/public/images/argentina.png";
import worldLogo from "@/public/images/world.png";
import { signOut, useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { useLocationContext } from "@/app/context/LocationContext";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";

function Navbar() {
  const { data: session } = useSession();
  const { isInArgentina, setIsInArgentina } = useLocationContext();

  /////////////LOCATION CHECKER////////////////////
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocalizacion no disponible en este browser");
    }
  }, []);

  function showPosition(position: any) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.address && data.address.country === "Argentina") {
          setIsInArgentina(true);
        } else {
          setIsInArgentina(false);
        }
      })
      .catch((error) => console.error("Error:", error));
  }
  //////////////////////////////////////////////

  const handleLogOut = () => {
    toast.error("Logged Out");
    signOut();
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 mb-2  shadow-xl">


          <Link href="/login">
            <button className="hover:scale-110 uppercase text-gris text-sm hover:text-gris md:ml-10 md:text-lg">
              entrar
            </button>
          </Link>
     

      <div className="flex justify-center 2xl:mx-20 ">
        <Link href="/" className="">
          <Image
            src={logo}
            width={150}
            priority
            alt="logo"
            className="w-20 md:w-32 hover:scale-110 transition duration-300"
          />
        </Link>
      </div>

      <div className="mr-2">
        <button>
          <BsSearch className="text-gris md:mr-10"/>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
