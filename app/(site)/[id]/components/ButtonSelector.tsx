import BuyButton from '@/app/components/BuyButton'
import ReadButton from '@/app/(site)/[id]/components/ReadButton'
import { Book } from '@prisma/client'
import React from 'react'

function ButtonSelector({book, userHas}:{book: Book, userHas: boolean}) {
  return (
    <div> {userHas ? <ReadButton book={book}/> : <BuyButton book={book} />}</div>
  )
}

export default ButtonSelector