import Link from 'next/link'
import Navbar from "@/app/components/navbar/Navbar"
import prisma from "@/libs/prismadb"
import { Book } from '@prisma/client'
import Row from '../components/rows/Row'
import Toggler from '../components/Toggler'
import RowsContainer from '../components/rows/RowsContainer'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/authOptions'
import { redirect } from 'next/navigation'
import UnathorizedNavbar from "@/app/(site)/components/header/UnauthorizedNavbar"
export const dynamic= "auto"

async function DashboardNotRegisteredUser() {
  
  
  const session =await getServerSession(authOptions);
  if(session){redirect("/user")}
//si esta logueado, mandalo a "/user"


  const books: Book[] = await prisma.book.findMany({})

    

    return (
      <main className="flex-1 flex flex-col justify-between">
       <UnathorizedNavbar />

        <section className="flex flex-col justify-between mx-auto w-3/4 md:w-1/2 items-center">
        <Toggler />

        
        
        
        {/* SearchBar autocomple*/}
        {/* <SearchBar products={products} /> */}
        
        {/*Buscador por titulo con filtro, dirige a prod por Id, FORM con server action */}
        
        
        
        
        </section>
    
  <section  className='w-[90%] mx-auto'>
        <RowsContainer books={books} />    
     </section>
      </main>
  )
}

export default DashboardNotRegisteredUser