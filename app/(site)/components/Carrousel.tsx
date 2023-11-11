"use client"
import { Book } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Carrousel({ book }: { book: Book}) {
     const [imgSource, setImgSource] = useState(true)

  return (
    <div>
      <div className="w-full mx-auto">

        {book.imgFront && book.imgBack && (
        <div className="relative">
          {/*  <BiChevronLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-25 transition hover:scale-125 group-hover:opacity-100" onClick={()=>setImgSource(prev=>!prev)}/> */}
        <Image src={imgSource? book.imgFront : book.imgBack} width={800} height={800} onClick={()=>setImgSource(prev=>!prev)} alt="portada" className="cursor-pointer"/>
        {/* <BiChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-25 transition hover:scale-125 group-hover:opacity-100"
          onClick={()=>setImgSource(prev=>!prev)}
        /> */}
        </div> )}

        {!book.imgBack && <Image src={book.imgFront!} width={800} height={800} alt="portada" />}

        {!book.imgFront && <Image src={book.imgBack!} width={800} height={800} alt="portada" />}
      </div>
    </div>
  );
}

export default Carrousel;
