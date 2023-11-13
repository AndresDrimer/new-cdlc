import BackButton from '@/app/components/BackButton';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import ProductDetails from '@/app/(site)/[id]/components/ProductDetails';
import { Book } from '@prisma/client';
import prisma from "@/libs/prismadb"
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import UnathorizedNavbar from "@/app/(site)/components/header/UnauthorizedNavbar"
import UserNavbar from "@/app/(site)/user/components/navbar/UserNavbar"

async function BookByIdPage({params}: {params: Params}) {

    const session = await getServerSession(authOptions);
    const books: Book[] = await prisma.book.findMany({})

 
  return (
    <div>

{session?.user  ? <UserNavbar /> : <UnathorizedNavbar />}



       <BackButton />
  
      {/*<Toggler />*/}


    
        <ProductDetails books={books} id={params.id}/>
     
   
      {/* Otros libros de la misma colección */}
     {/*  
      { !book.isCombo && !book.isColeccion && book.genreName!=="no-genre"|"ensayos"|"barrios"|"planeamiento" &&
         <Row products={sameGenreProducts} title="de la misma colección" />
      }
       */}
  {/*Row de Productos destacados */}
      {/*  { book.isCombo || book.isColeccion || book.genreName==="no-genre"|"ensayos"|"barrios"|"planeamiento" && 
         <Row products={comboAndColeccionProducts} title="combos & colecciones" />
       } */}
      

     
      </div>
  )
}

export default BookByIdPage