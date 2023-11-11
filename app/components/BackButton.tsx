"use client"
import { useRouter } from 'next/navigation'
import { IoChevronBackOutline } from 'react-icons/io5'

function BackButton() {
    const router = useRouter();
  return (
    <button className="flex items-center ml-4 cursor-pointer text-gray-500 hover:text-black mt-2 text-xs" onClick={()=> router.back()}> 
    <IoChevronBackOutline className="inline" />
    volver
  </button>

  )
}

export default BackButton