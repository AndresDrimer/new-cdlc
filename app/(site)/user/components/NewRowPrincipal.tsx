"use client"
import { Book } from '@prisma/client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

function NewRowPrincipal({books, title}:{books: Book[], title: string}) {
 const filteredBooks = books.filter(it=>it.imgFront!=="")
 const selectedBooks = filteredBooks.slice(0,3)

 const [currentIndex1, setCurrentIndex1] = useState(0);
 const [currentIndex2, setCurrentIndex2] = useState(1);
 const [currentIndex3, setCurrentIndex3] = useState(2);

 useEffect(() => {
 const intervalId = setInterval(() => {
   const newIndex1 = currentIndex2;
   const newIndex2 = currentIndex3;
   const newIndex3 = (currentIndex3 + 1) % selectedBooks.length;

   setCurrentIndex1(newIndex1);
   setCurrentIndex2(newIndex2);
   setCurrentIndex3(newIndex3);
 }, 2000)

 return () => clearInterval(intervalId);
 }, [currentIndex1, currentIndex2, currentIndex3])

 return (
 <div className='w-full'>
  <div className="flex items-center ">
        <h2 className="w-full cursor-pointer text-sm font-semibold text-gris transition duration-200 hover:text-gray-600 md:text-2xl ml-4">
          {title}
        </h2>
        <div className=" w-full mt-6 cursor-pointer"></div>
      </div>

   <div className='flex justify-center relative'>
     <Image 
       //src={`${selectedBooks[currentIndex1].imgFront}`}
       src="https://res.cloudinary.com/dgt7dir8i/image/upload/v1699452991/tapa-sin-fondo-cdlc_xn8nap.jpg"
       width={200}
       height={400}
       alt="book-cover"
       className=' p-14'
     />
     <Image 
       //src={`${selectedBooks[currentIndex2].imgFront}`}
       src="https://res.cloudinary.com/dgt7dir8i/image/upload/v1699452991/tapa-sin-fondo-cdlc_xn8nap.jpg"
       width={200}
       height={400}
       alt="book-cover"
       className='absolute top-0'
     />
     <Image 
       //src={`${selectedBooks[currentIndex3].imgFront}`}
       src="https://res.cloudinary.com/dgt7dir8i/image/upload/v1699452991/tapa-sin-fondo-cdlc_xn8nap.jpg"
       width={200}
       height={400}
       alt="book-cover"
       className=' p-14'
     />
   </div>
 </div>
 )
}

export default NewRowPrincipal