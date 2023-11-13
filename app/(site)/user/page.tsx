import Toggler from "@/app/components/Toggler";
import RowsContainer from "@/app/components/rows/RowsContainer";
import { Book } from "@prisma/client";
import prisma from "@/libs/prismadb";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import Row from "@/app/components/rows/Row";
import Image from "next/image";
import SearchBar from "@/app/components/SearchBar";
import { redirect } from "next/navigation";
import UserNavbar from "@/app/(site)/user/components/navbar/UserNavbar"
import NewRowPrincipal from "@/app/(site)/user/components/NewRowPrincipal"


async function UserPage() {

  const books: Book[] = await prisma.book.findMany({});
  
  const session = await getServerSession(authOptions);
  
  const userEmail = session?.user?.email ?? "";
  
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: { books: true },
  });
  
  if(!user){redirect("/")}
  
  const userBooks: Book[] = user.books.filter((book) =>
      user.booksById.includes(book.id)
  );

  

  return (
    <main className="flex flex-col relative">
   
      <UserNavbar />
     <section className="flex flex-col mx-auto w-full pr-2 items-center ">
        <Toggler /> 
        
          {/* SearchBar autocomple*/}
   {/*      <SearchBar /> */}
 
      </section>
      
{/*aca armo el nuevo component*/}
   {/*   <NewRowPrincipal books={books} title="colección personal"/>
/*}

           
      {/*Row para MIS LIBROS*/}
      <Row books={userBooks} title="colección personal" />
   
   

      <RowsContainer books={books} />
    </main>
  );
}

export default UserPage;
