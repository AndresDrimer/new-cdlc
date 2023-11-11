import { Book } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function GridForCollectionsAndCombosMd({
  filteredSameGenreBooks,
  book,
}: //comboProducts
{
  filteredSameGenreBooks: Book[];
  book: Book;
  //comboProducts: Product[]
}) {
  return (
    <div className="mt-6">
      {/*if it is a colection it is going to show this*/}
      {book.isColeccion && (
        <div>
          <p className="text-sm mt-4">
            incluye estos {filteredSameGenreBooks.length} libros:
          </p>
          <div className="grid grid-cols-2 space-y-2">
            {filteredSameGenreBooks.map((it) => (
              <div key={it.id}>
                <Link
                  href={`/${it.id}`}
                  className="flex items-center"
                  target="_blank"
                >
                  <Image
                    src={it.imgFront!}
                    width={150}
                    height={150}
                    alt="portada"
                    className="hover:scale-110"
                  />
                  <div>
                    <p className="text-md uppercase font-bold">{it.title}</p>{" "}
                    <p className="text-sm">de {it.author}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/*if it is a COMBO it is going to show this*/}
      
      {/* 
      {product.isCombo && (
        <div>
          <p className="text-sm mt-4">
            incluye estos {comboProducts.length} libros:
          </p>

          <div className="grid grid-cols-2 space-y-2">
            {comboProducts.map((it) => (
              <div key={it._id}>
                <Link
                  href={`/${it._id}`}
                  className="flex items-center"
                  target="_blank"
                >
                  <img
                    src={it.imgFront}
                    width={150}
                    height={150}
                    alt="portada"
                    className="hover:scale-110"
                  />
                  <div>
                    <p className="text-md uppercase font-bold">{it.title}</p>{" "}
                    <p className="text-sm">de {it.author}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )} */}
      
    </div>
  );
}

export default GridForCollectionsAndCombosMd;
