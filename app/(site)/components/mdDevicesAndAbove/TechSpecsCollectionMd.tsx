import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Book } from "@prisma/client";
import BuyButton from "@/app/components/BuyButton";

function TechSpecsCollectionMd({
  filteredSameGenreBooks,
  book,
 // comboProducts,
}: {
  filteredSameGenreBooks: Book[];
  book: Book;
  //comboProducts: Product[];
}) {


  return (
    <div className="flex-1">
     

{book.genreName !== "no-genre" && (
  <div>
    <p className={"text-xs text-right"}>
      colección <span className="uppercase">{book.genreName}</span>
    </p>
    
    {/*line gets color of collection if it exists, otherwise custom gray*/}
    <hr
      className={`border-1 {product.genre ? border-${book.genreName}  : border-gris }`}
    />
  </div>
)}

<h1 className="text-bold  text-3xl sm:text-4xl uppercase mt-2 w-3/4">
  {book.title}
</h1>

{book.author && (
  <h1 className="text-sm w-3/4 mt-2">de {book.author}</h1>
)}


      
  
      <BuyButton book={book} />
    </div>
  );
}

export default TechSpecsCollectionMd;
