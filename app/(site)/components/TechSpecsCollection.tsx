import Image from "next/image";
import Link from "next/link";
import React from "react";
import BuyButton from "@/app/components/BuyButton";
import { Book } from "@prisma/client";

function TechSpecsCollection({
  filteredSameGenreBooks,
  book,
  //comboProducts,
}: {
  filteredSameGenreBooks: Book[];
  book: Book;
//  comboProducts: Book[];
}) {


  return (
    <div className="flex-1">
      
      
      
      {/*if it is a colection it is going to show this*/}
     {book.isColeccion && (<div>
        <p className="text-xs">
          incluye estos {filteredSameGenreBooks.length} libros:
        </p>
        <div>
          {filteredSameGenreBooks.map((it) => (
            <div key={it.id}>
              <Link
                href={`/${it.id}`}
                className="flex items-center"
                target="_blank"
              >
                <Image
                  src={it.imgFront!}
                  width={100}
                  height={100}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-sm uppercase">{it.title}</p>{" "}
                  <p className="text-xs">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>)}



{/*if it is a COMBO it is going to show this*/}
{/*       {book.isCombo && (
        <div>
            <p className="text-xs">
          incluye estos {comboProducts.length} libros:
        </p>

        <div>
          {comboProducts.map((it) => (
            <div key={it.id}>
              <Link
                href={`/${it.id}`}
                className="flex items-center"
                target="_blank"
              >
                <img
                  src={it.imgFront}
                  width={100}
                  height={100}
                  alt="tapa de libro"
                  className="hover:scale-110"
                />
                <div>
                  <p className="text-sm uppercase">{it.title}</p>{" "}
                  <p className="text-xs">de {it.author}</p>
                </div>
              </Link>
            </div>
          ))} 
        </div>







        </div>



      )}
*/}
      <BuyButton book={book} />
    </div>
  );
}

export default TechSpecsCollection;
