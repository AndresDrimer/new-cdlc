"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { useLocationContext } from "@/app/context/LocationContext";
import toast from "react-hot-toast";
import { BsSearch } from "react-icons/bs";
import {AiOutlineMenu} from "react-icons/ai"
import ModalHamburguer from "../ModalHamburguer";





function Navbar() {

  const [showModal, setShowModal] = useState(false)

  const handleLogOut = () => {
    toast.error("Logged Out");
    signOut();
  };

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 mb-2 mt-2 shadow-xl">

{showModal && <div className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-40 z-10 "></div>}
{showModal && <ModalHamburguer  showModal={showModal} setShowModal={setShowModal}/>}

<div className="md:ml-10"><button onClick={()=>setShowModal(it=>!it)}><AiOutlineMenu /></button></div>

      <div className="flex justify-center 2xl:mx-20">
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

      <div className="flex space-x-4 2xl:mx-20 2xl:space-x-6 items-center ">

     

        <div className="mr-2"><button><BsSearch className="text-gris md:mr-10" /></button></div>
      </div>
    </header>
  );
}

export default Navbar;
