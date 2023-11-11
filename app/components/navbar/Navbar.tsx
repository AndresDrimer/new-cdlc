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
    <header className="w-full flex items-center justify-between px-4 py-2 mb-8 mt-2 shadow-xl">
      <div className="flex justify-center 2xl:mx-20">
        <Link href="/" className="pb-4">
          <Image
            src={logo}
            width={150}
            priority
            alt="logo"
            className="w-20 md:w-32 hover:scale-110 transition duration-300"
          />
        </Link>
      </div>

      <div className="flex space-x-4 2xl:mx-20 2xl:space-x-6 items-center ">

        {session?.user?.name && (<p className="text-xs">Hola {session.user.name} </p>)}
        {session?.user?.image ? (
          <div>
            <Image
              src={session?.user?.image}
              alt="avatar"
              width={20}
              height={20}
              className="w-7 h-7 rounded-full"
            />
          </div>
        ) : (
          <div className="hidden md:inline">
            <RxAvatar size={24} className="text-gray-400" />
          </div>
        )}

        <div className="flex  items-center gap-6">
          <div>
            <Image
              src={isInArgentina ? argentinaLogo : worldLogo}
              width={24}
              height={24}
              alt="location logo"
            />
          </div>

          {session?.user && (
            <Link href="/user/settings">
              <RiSettings3Fill size={24} className="text-gris w-6 h-6" />
            </Link>
          )}

          {!session?.user ? (
            <Link href="/login">
              <button className="hover:scale-110 uppercase text-gris hover:text-gray-500">
                entrar{" "}
              </button>
            </Link>
          ) : (
            <div>
              <button
                className="uppercase hover:scale-110"
                onClick={() => handleLogOut()}
              >
                Salir
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
