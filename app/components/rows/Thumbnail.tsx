"use client"
import { Book } from "@prisma/client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";


const Thumbnail = ({ book, width, height }: {book: Book, width:number, height: number }) => {

  const {data: session} = useSession();

  return (
    <Link
      href={`/${book.id}`}
      className={`relative  min-w-[180px] cursor-pointer transition duration-200 ease-out h-70 md:h-70 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
      src={book.imgFront!}
        className="rounded-sm md:rounded"
        alt="portada"
        width={width}
        height={height}
    />
    

    {book.discountPercentage !==0 && (<div className="font-xs px-2 bg-gris text-white absolute top-0 right-0 shadow-sm hover:text-rojo ">  {book.discountPercentage}% off </div>) } 
     </Link>
  );
};

export default Thumbnail;