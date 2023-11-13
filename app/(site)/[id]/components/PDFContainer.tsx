import { Book } from '@prisma/client'
import React from 'react'

function PDFContainer({thisBook}: {thisBook: Book}) {    
  
  
  //mocks thisBook.id
const urlBookFake = "1H3Wa0C4bVisJuKV8oWJehwk9cOJs7fLn"

const bookUrl=`https://drive.google.com/file/d/${urlBookFake}/preview`

  return (
    <section>
  <div style={{ position: "relative", paddingBottom: "100%", height: 0, overflow: "hidden" }}>


<iframe src={bookUrl} width="100%" height="1600" allow="autoplay"></iframe>
</div>
</section>
  )
}

export default PDFContainer