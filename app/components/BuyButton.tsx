"use client"
import { Book } from '@prisma/client'

import { useLocationContext } from '../context/LocationContext'

function BuyButton({book}: {book: Book}) {

const {isInArgentina, setIsInArgentina} = useLocationContext();

  return (
    <div className="mt-8">
        <a
          href={isInArgentina ? book.urlLocal! : book.urlIntl!}
          target="_blank"
        >
          <button className="button">comprar</button>
        </a>
      </div>
  )
}

export default BuyButton