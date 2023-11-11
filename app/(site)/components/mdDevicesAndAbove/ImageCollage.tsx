"use client";
import { Book } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";

function ImageCollage({ book }: { book: Book }) {
  const imgSrc = book.imgFront ? book.imgFront : book.imgBack;
  const [imgChosen, setImgChosen] = useState(imgSrc);

  //ojota aca con el tema IMAGE, esta rompiendo
  return (
    <div className="flex-1 mt-4">
      <div className="flex">
        <div className="w-1/3">
          <Image
          width={400}//esto lo invente
          height={400}//y esto
            src={book.imgFront!}
            alt=""
            onClick={() => setImgChosen(book.imgFront)}
            className="cursor-pointer"
          />
          <Image
            src={book.imgBack!}
            width={400}//esto lo invente
            height={400}//y esto
            alt=""
            onClick={() => setImgChosen(book.imgBack)}
            className="cursor-pointer"
          />
        </div>
        <div className="w-2/3 overflow-scroll scrollbar-hide">
          <Image
            src={imgChosen!}
            alt=""
            className="hover:scale-[1.2] hover:cursor-zoom-in touch-auto transition ease-in duration-300"
            width={800}//inventadfa
            height={800}//y esta
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCollage;
