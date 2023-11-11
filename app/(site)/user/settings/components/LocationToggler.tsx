"use client"
import argentinaLogo from "@/public/images/argentina.png";
import worldLogo from "@/public/images/world.png";
import { useLocationContext } from '@/app/context/LocationContext';

import Image from 'next/image';

function LocationToggler() {
 
    const {isInArgentina, setIsInArgentina} = useLocationContext();

  return (
    <section className="w-full  flex justify-center">   
    <div className="flex items-center justify-center w-[120px] gap-2">
      <p className={`text-xs text-gris ${isInArgentina && "text-black font-bold"}`}>
        Argentina
      </p>
      <Image
            src={argentinaLogo}
            width={24}
            height={24}
            alt="location logo"
          />
      <div className="flex h-10 w-full flex-col items-center justify-center gap-6 ">
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="switch" type="checkbox" className="peer sr-only" onClick={()=> setIsInArgentina(prev=>!prev)}/>
          <label htmlFor="switch" className="hidden"></label>
          <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gris after:bg-white after:transition-all  peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-rojo"></div>
        </label>
      </div> <Image
            src={worldLogo}
            width={24}
            height={24}
            alt="location logo"
          /><p className={`text-xs text-gris ${!isInArgentina && "text-black font-semibold"}`}>
        Resto del Mundo
      </p>
    </div>
   
    </section>
  )
}

export default LocationToggler