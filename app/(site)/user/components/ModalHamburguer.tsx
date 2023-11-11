"use client";


import { useLocationContext } from "@/app/context/LocationContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

import { RxAvatar } from "react-icons/rx";
import { RiSettings3Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi"
import { useRouter } from "next/navigation";

import argentinaLogo from "@/public/images/argentina.png";
import worldLogo from "@/public/images/world.png";
import toast from "react-hot-toast";



type ModalHamburguerProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
};

function ModalHamburguer({ showModal, setShowModal }: ModalHamburguerProps) {
  const { data: session } = useSession();
  const { isInArgentina, setIsInArgentina } = useLocationContext();
const router = useRouter();
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

  const handleClickSettings = ()=>{
    setShowModal(false)
   // router.push("/user/settings")
  };

  
  const handleLogOut = () => {
    toast.error("Logged Out");
    signOut();
  };

  return (
    <div className="absolute top-0 left-0 w-1/2 md:w-1/3 h-screen bg-white z-20 p-4 animate-slide-in-from-left">
      <div className="flex justify-end">
        <button onClick={() => setShowModal(false)}>
          <AiOutlineCloseCircle size={22}/>
        </button>
      </div>
      <div className="flex flex-col justify-between gap-12 mt-6">
        <div>
<p className="text-center text-xs mt-4">user:</p>
      <div className="text-center">{session?.user?.name}</div>
      <div className="flex gap-4 justify-center">
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

        <div>
          <Image
            src={isInArgentina ? argentinaLogo : worldLogo}
            width={24}
            height={24}
            alt="location logo"
          />
        </div>
      </div>
      </div>

      <div className="flex justify-center">
        <button className="flex border py-1 px-2 hover:scale-110" onClick={handleClickSettings} >
          {session?.user && (
            <Link href="/user/settings">
              <RiSettings3Fill size={24} className="text-gris w-6 h-6 mr-2" />
            </Link>
          )}
          settings
        </button>
      </div>



      <div className="flex justify-center "><button className="flex items-center gap-1 border py-1 px-2 hover:scale-110" onClick={handleLogOut}> <BiLogOut className="mr-2" />log out</button>
      </div>

      </div>
    </div>
  );
}

export default ModalHamburguer;
