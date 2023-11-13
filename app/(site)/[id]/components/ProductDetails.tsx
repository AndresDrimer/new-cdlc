import { Book } from "@prisma/client";
import Carrousel from "../../components/Carrousel";
import TechSpecs from "../../components/TechSpecs";
import TechSpecsCollection from "../../components/TechSpecsCollection";
import ImageCollage from "../../components/mdDevicesAndAbove/ImageCollage";
import TechSpecsCollectionMd from "../../components/mdDevicesAndAbove/TechSpecsCollectionMd";
import GridForCollectionsAndCombosMd from "../../components/mdDevicesAndAbove/GridForCollectionsAndCombosMd";
import BuyButton from "@/app/components/BuyButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/libs/prismadb"
import ButtonSelector from "./ButtonSelector";


 async function ProductDetail({ books, id }: {books: Book[], id: string}) {
const session = await getServerSession(authOptions);
const userEmail  = session?.user?.email ?? ""
const bookId = id

///////////////////ahora esto devuelve true o false, pero deberia aplicarlo a un estado, creo, para poder usarlo....
const userHasCurrentBook = async (userEmail: string, bookId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    }
  });

  if(user){
    const result = user.booksById.includes(bookId);
    return result
  }
};

const userHas = await userHasCurrentBook(userEmail, bookId) as boolean;
//////////////////////

  //filter selected product
  const [book] = books.filter((it) => it.id === id);


  //filter same genre
  const sameGenreBooks = books && book  ? books.filter((it) => it.genreName === book.genreName && it.id!==id) : [];  
  




  
  return (
    <section className="p-4">
      {/*contenedor de imagenes y titulos*/}

      {/*small devices*/}
      <div className="block md:hidden">
        <Carrousel book={book} />

        {book && book.isColeccion === false && 
        book.isCombo === false ? (
          <>
            <TechSpecs book={book} />

        <ButtonSelector book={book} userHas={userHas}/>
     
          </>
        ) : (
          <TechSpecsCollection
            filteredSameGenreBooks={sameGenreBooks}
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

          {book && book.isColeccion === false && book.isCombo === false ? (<div className="flex flex-col">
          <TechSpecs book={book} /> 
          
          <ButtonSelector book={book} userHas={userHas}/>
         
          
          
          </div>
        ) : (  <div>  
          <TechSpecsCollectionMd
            filteredSameGenreBooks={sameGenreBooks}
            book={book}
           //comboProducts={comboProducts}
          />
          </div>
        )}

        </div>   {/*Descripcion detallada, comentarios*/}
      {book && !book.isColeccion && !book.isCombo && (
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
          filteredSameGenreBooks={sameGenreBooks} 
          book={book}
          //comboProducts={comboProducts} 
         />
          </div>






    </section>
  );
}

export default ProductDetail;