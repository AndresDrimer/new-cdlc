"use server"

import prisma from "@/libs/prismadb"
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";



export const handleAddNewBookToUserCollection = async (formData: FormData) => {
    "use server";

    const selectedBookId = formData.get("selectedBook")?.toString();
    const bookKey = formData.get("bookKey")?.toString();

    //get User
    const session = await getServerSession(authOptions);
    const sessionEmail = session?.user?.email ?? "";

    try {
      // Busca el libro en la base de datos
      const book = await prisma.book.findUnique({
        where: { id: selectedBookId },
      });

      // Comprueba si el bookKey es correcto
      if (book && book.key === bookKey) {
        // Agrega el ID del libro al campo booksById del usuario

        // esto tengo que pensar un poco como hacerlo porque no esta en la DB todavia....
        //const hashedBookKey= await bcrypt.hash(bookKey, 10);

        const updatedUserCollection = await prisma.user.update({
          where: { email: sessionEmail },
          data: {
            booksById: {
              push: selectedBookId,
            },
          },
        });
        console.log("updated", selectedBookId);
        return updatedUserCollection
      } else {   
        throw new Error("Book not found or bookKey is incorrect")
      }
    } catch (error) {
      console.error("no se pudo agregar nuevo libro", error);
    }
  };





export const handleChangeUserName = async (formData: FormData) => {
    "use server";
    const updatedName = formData.get("newName")?.toString();


    const session = await getServerSession(authOptions);
    const sessionEmail = session?.user?.email ?? "";
    
    


    try {
      const updateUser = await prisma.user.update({
        where: { email: sessionEmail },
        data: { name: updatedName },
      });
      console.log("updated", updatedName);

      /* await update({
  ...session, 
  user: {
      ...session?.user, name: updatedName }
  }) */
    } catch (error) {
      console.error("no se pudio", error);
    }
  };

