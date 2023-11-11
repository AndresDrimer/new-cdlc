"use client"
import prisma from "@/libs/prismadb";
import LocationCheck from "./components/LocationCheck";
import { SlBookOpen } from "react-icons/sl";
import Link from "next/link";

import Image from "next/image";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-hot-toast";
import {
  handleAddNewBookToUserCollection,
  handleChangeUserName,
} from "@/app/actions/user-actions";
import Thumbnail from "@/app/components/rows/Thumbnail";
import Accordion from "@/app/components/Accordion";
import TechSpecs from "../../components/TechSpecs";
import { useSession } from "next-auth/react";

async function UserSettingsPage() {
  ///get user

  
  const {data: session}  = useSession();
  const sessionEmail = session?.user?.email ?? "";

  const user = await prisma.user.findUnique({
    where: { email: sessionEmail },
    include: { books: true },
  });

  ///get books
  const books = await prisma.book.findMany({});

  return (
    <div>
      <section className="flex flex-col  justify-center mx-auto w-full md:w-[90%] lg:w-1/2 items-center mt-4 gap-6">
        {/* listado de libro del usuario */}

        <Accordion title="Colección personal">
          <div id="contenido-acordeon">
            {user?.books.map((book) => (
              <div
                key={book.id}
                className="flex items-start justify-start h-full mr-2 "
              >
                <Link
                  href={`/${book.id}`}
                  className={`relative  min-w-[180px] cursor-pointer transition duration-200 ease-out h-70 md:h-70 md:min-w-[260px] md:hover:scale-105`}
                >
                  <Image
                    src={book.imgFront!}
                    className="rounded-sm md:rounded"
                    alt="portada"
                    width={200}
                    height={200}
                  />
                </Link>

                <div className="">
                  <a href={`${process.env.BASE_URL}/${book.id}`}>
                    <h1 className="text-sm  uppercase py-2 lg:text-lg">
                      {book.title}
                    </h1>{" "}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="border-2 mt-8">
            <h3 className="text-center">Agregar Libro </h3>
            <form
              action={handleAddNewBookToUserCollection}
              className="flex flex-col gap-4 mt-4 "
            >
              <select
                name="selectedBook"
                id=""
                className="inputField text-center "
                placeholder="seleccionar libro"
              >
                {books.map((it) => (
                  <option className=" text-xs" key={it.id} value={it.id}>
                    {it.title}
                  </option>
                ))}
              </select>

              <input
                type="text"
                name="bookKey"
                className="inputField text-center "
                placeholder="{ ingresar clave }"
              />
              <button className="button">enviar</button>
            </form>
          </div>
        </Accordion>

        <Accordion title="Detalles de usuario">
          <div className="flex flex-col gap-8">

            {/*location*/}
            <div className="mt-8">
              <LocationCheck />
            </div>
            <div className="flex flex-col ">
              <div className="text-center ">
                Tu username:
                <span className="font-bold "> {session?.user?.name}</span>
              </div>

                 {/*name*/}  
                           <form
                action={handleChangeUserName}
                className="flex flex-col items-center justify-center gap-2 "
              >
                <input
                  className="inputField "
                  type="text"
                  name="newName"
                  placeholder="nuevo nombre"
                />
                <button className="button bg-gris">modificar</button>
              </form>
            </div>
{/*image*/}
            <div className="mt-8">
              <div className="flex items-center justify-center gap-4">
                <p>Imagen actual: </p>
                <div>
                  {session?.user?.image ? (
                    <Image
                      src={session.user.image!}
                      alt="foto"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="align">
                      <RxAvatar size={24} className="text-gray-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <div> Actualizar imagen: </div>
              <form action="" className="flex flex-col">
                <input type="file" />
                <button className="button bg-gris">modificar</button>
              </form>
            </div>
          </div>
        </Accordion>
      </section>
    </div>
  );
}

export default UserSettingsPage;

//bookId=651f1e98fcd6afc283f4be15
//bookKey=978-987-25706-4-4
