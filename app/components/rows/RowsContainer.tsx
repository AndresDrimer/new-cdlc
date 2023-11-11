"use client"

import { Book } from "@prisma/client";
import React, { useContext } from "react";
import Row from "./Row";
import { useDigitalOrPhysicalContext } from "@/app/context/DigitalOrPhysicalContext";

function RowsContainer({ books }: { books: Book[] }) {

//cçomo hacer que filtre en fisicos cuando una de las categorias tiene menos de 4 unidades??

    const {isDigital, setIsDigital} = useDigitalOrPhysicalContext();


  //filter for singular products
  const singleBooks = books.filter(
    (it) => it.isColeccion === false && it.isCombo === false
  );

  //filter for combos and colecciones (sort method brings combos first on array)
  const comboAndColeccionBooks = books.filter(
    (it) => it.isColeccion === true || it.isCombo === true
  );

  //filter for each coleccion (sort method brings product which have isColeccion=true first on returned array)
  const habitatBooks = books.filter((it) => it.genreName === "hábitat");
  const urbanidadBooks = books.filter((it) => it.genreName === "urbanidad");
  const territorioBooks = books.filter((it) => it.genreName === "territorio");
  const movilidadBooks = books.filter((it) => it.genreName === "movilidad");
  const ciudadesBooks = books.filter((it) => it.genreName === "ciudades");

  const collections= [
    {
        array: singleBooks,
        title: "catálogo",
    },
    {
        array: comboAndColeccionBooks,
        title: "combos & colecciones completas" 
    },    
  ];
  
    const colecciones = [
    {
        array: habitatBooks,
        title: "hábitat" 
    },       
    {
        array: urbanidadBooks,
        title: "urbanidad" 
    },
    {
        array: territorioBooks,
        title: "territorio" 
    },
    {
        array: movilidadBooks,
        title: "movilidad" 
    },
    {
        array: ciudadesBooks,
        title: "ciudades" 
    },
  ];


  return (
    <section>


    {collections.map(collection=> (
      <Row books={collection.array} title={collection.title} key={collection.title} />
    ))}
  </section>
  );
}

export default RowsContainer;
