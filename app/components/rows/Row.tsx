"use client";
import { useEffect, useRef, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Thumbnail from "./Thumbnail";
import { Book } from "@prisma/client";
import { useDigitalOrPhysicalContext } from "@/app/context/DigitalOrPhysicalContext";


const Row = ({ books, title}: {books:Book[], title:string}) => {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const {isDigital, setIsDigital} = useDigitalOrPhysicalContext();




    //method to filter if UI shows digital or physical products
    const booksDigitalOrPhysical = books.filter(
        (book) => book.isDigital === isDigital
      );

  const handleClick = (direction: string) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };


  return (
    <div className="space-y-0.5 md:space-y-2 mx-2 w-full">
      <div className="flex items-center ">
        <h2 className="w-full mt-6 cursor-pointer text-sm font-semibold text-gris transition duration-200 hover:text-gray-600 md:text-2xl ml-4">
          {title}
        </h2>
        <div className=" w-full mt-6 cursor-pointer"></div>
      </div>

      <div className="group relative md:ml-2">
        <BiChevronLeft
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("left")}
        />
        <div
          className="flex items-center  space-x-0.5 scrollbar-hide overflow-x-scroll md:space-x-2.5 md:p-2"
          ref={rowRef}
        >
          {booksDigitalOrPhysical.map(
            (book) =>
              book.imgFront && (
                <Thumbnail width={400} height={400} key={book.id} book={book}/>
              )
          )}
        </div>
       
        <BiChevronRight
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};



export default Row;
