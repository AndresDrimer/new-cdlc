"use client"
import { Book } from '@prisma/client'
import { useState } from 'react'
import PDFContainer from './PDFContainer'
import Link from 'next/link'

function ReadButton({book}: {book: Book}) {

  const [showPdf, setShowPdf] = useState(false)
  return (<>
  <Link href={`/${book.id}/read`}>
    <button className='button' onClick={()=>setShowPdf(prev=>!prev)}>{showPdf ? "Cerrar" : "Leer PDF"}</button>
    </Link>
</>
  )
}

export default ReadButton