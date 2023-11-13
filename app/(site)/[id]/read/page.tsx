
import UserNavbar from "@/app/(site)/user/components/navbar/UserNavbar"
import PDFContainer from "@/app/(site)/[id]/components/PDFContainer"
import { useParams } from "next/navigation"
import BackButton from "@/app/components/BackButton"
import { Book } from "@prisma/client"
export default async function ReadPage({
    params,
    searchParams,
  }: {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {

const bookId = params.id;
const thisBook = await prisma?.book.findUnique({
    where:{
        id: bookId,
    }
}) as Book;
 
  
    return (
    <div>
        <UserNavbar/>
        <BackButton />
        <PDFContainer thisBook={thisBook}/>
         </div>
  )
}

