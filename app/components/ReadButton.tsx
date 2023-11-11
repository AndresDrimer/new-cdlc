"use client"
import { Book } from '@prisma/client'
import { Dispatch, SetStateAction } from 'react'

function ReadButton({book, showPdf, setShowPdf}: {book: Book, showPdf: boolean, setShowPdf: Dispatch<SetStateAction<boolean>>;  }) {

  return (
    <button className='button' onClick={()=>setShowPdf(prev=>!prev)}>{showPdf ? "Cerrar" : "Leer PDF"}</button>

  )
}

export default ReadButton