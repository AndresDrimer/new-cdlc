//import { urlStoreIntl } from "@/constants/constant";
import React from "react";
import { Book } from "@prisma/client";
import BuyButton from "@/app/components/BuyButton";

function TechSpecs({ book }: { book: Book }) {


  return (
    <div>

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


      
    </div>
  );
}

export default TechSpecs;
