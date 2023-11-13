import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div>loading...
<Image 
src="/Book.gif"
alt="loading-spinner"
width={128}
height={128} />

    </div>
  )
}

export default loading