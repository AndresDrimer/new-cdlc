"use client";

import { useDigitalOrPhysicalContext } from "@/app/context/DigitalOrPhysicalContext"
import { Book } from "@prisma/client";
import {useState, useEffect} from "react"


import Carrousel from "../../components/Carrousel";
import TechSpecs from "../../components/TechSpecs";
import TechSpecsCollection from "../../components/TechSpecsCollection";
import ImageCollage from "../../components/mdDevicesAndAbove/ImageCollage";
import TechSpecsCollectionMd from "../../components/mdDevicesAndAbove/TechSpecsCollectionMd";
import GridForCollectionsAndCombosMd from "../../components/mdDevicesAndAbove/GridForCollectionsAndCombosMd";
import BuyButton from "@/app/components/BuyButton";
import ReadButton from "@/app/components/ReadButton";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";



 function ProductDetail({ books, id }: {books: Book[], id: string}) {

  const { isDigital, setIsDigital } = useDigitalOrPhysicalContext();
  const [hasBook, setHasBook] = useState(true)
  const [showPdf, setShowPdf] = useState(false)
  const {data: session} = useSession();
  const userEmail = session?.user?.email ?? ""
 const bookId = useParams();

 // pasar esta funcion a un comp server
 const userHasBook = async (userEmail: string, bookId: string) => {
  const user = await prisma?.user.findUnique({
    where: {
      email: userEmail,
    },
  });

  if (user) {
    const userHasBook = user.booksById.includes(bookId);
    return userHasBook;
  }

  return false;
 }

 const checkUserHasBook = async (userEmail: string, bookId: string) => {
  const userHasBookResult = await userHasBook(userEmail, bookId);

  console.log("aca", userHasBookResult);
}

// Llamada a la función
checkUserHasBook('user@example.com', 'book123');
 
  //filter selected product
  const [book] = books.filter((it) => it.id === id);

  //filter same genre
  const sameGenreBooks = books.filter((it) => it.genreName === book.genreName && it.id!==id);  
  
  //filter digital o physical from digitalContext
  const filteredSameGenreBooks = sameGenreBooks.filter(
    (it) => it.isDigital === isDigital
  );



  
  return (
    <section className="p-4">
      {/*contenedor de imagenes y titulos*/}



      {/*small devices*/}
      <div className="block md:hidden">
        <Carrousel book={book} />

        {book.isColeccion === false && 
        book.isCombo === false ? (
          <>
            <TechSpecs book={book} />  
          {hasBook ? <ReadButton book={book} showPdf={showPdf} setShowPdf={setShowPdf} /> : <BuyButton book={book} />}
          </>
        ) : (
          <TechSpecsCollection
            filteredSameGenreBooks={filteredSameGenreBooks}
            book={book}
           // comboProducts={comboProducts}
          />
        )} 
      </div>


      {/*medium devices and above*/}
      <div className="hidden md:block">
        <div className="flex mx-auto">
          <div className="hidden md:inline-block w-3/5">
            <ImageCollage book={book} />
          </div>

          {book.isColeccion === false && book.isCombo === false ? (<div className="flex flex-col">
          <TechSpecs book={book} /> 
          
          {hasBook ? <ReadButton book={book} showPdf={showPdf} setShowPdf={setShowPdf} /> : <BuyButton book={book} />}
         
          
          
          </div>
        ) : (  <div>  
          <TechSpecsCollectionMd
            filteredSameGenreBooks={filteredSameGenreBooks}
            book={book}
           //comboProducts={comboProducts}
          />
          </div>
        )}

        </div>   {/*Descripcion detallada, comentarios*/}
      {!book.isColeccion && !book.isCombo && (
        <div className="space-y-6 ml-4 mt-4 mr-6">
          <div className="">
            <div className="my-8">
              <p className="text-xs text-gray-500">{book.techSpecs}</p>
            </div>

            <p className="text-sm font-bold">Reseña</p>
            <p className="text-sm leading-smooth">{book.review}</p>

          </div>
          <div>
            <p className="text-sm font-bold ">Sobre autor(a)</p>
            <p className="text-xs leading-smooth">{book.authorSpecs}</p>
          </div>
        </div>
      )}
      </div>


   


      <div className="hidden md:block">
      <GridForCollectionsAndCombosMd 
          filteredSameGenreBooks={filteredSameGenreBooks} 
          book={book}
          //comboProducts={comboProducts} 
         />
          </div>
{showPdf && <div style={{ position: "relative", paddingBottom: "100%", height: 0, overflow: "hidden" }}>
<iframe src="https://drive.google.com/file/d/1H3Wa0C4bVisJuKV8oWJehwk9cOJs7fLn/preview" width="100%" height="800" allow="autoplay"></iframe>
</div>}

    </section>
  );
}

export default ProductDetail;