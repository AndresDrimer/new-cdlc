"use client"
import { useDigitalOrPhysicalContext } from '@/app/context/DigitalOrPhysicalContext';

function Toggler() {
     //preset is digital, can be toggled to physical
     const {isDigital, setIsDigital} = useDigitalOrPhysicalContext ();

  return (
    <section className="w-full flex justify-end ">   {/*selector toggle*/}
    <div className="flex items-center justify-center w-[120px] gap-2">
      <p className={`text-[10px] md:text-sm  text-gris ${isDigital && "text-black font-semibold"}`}>
        Digital
      </p>
      <div className="flex h-10 w-full flex-col items-center justify-center gap-6 ">
        <label className="relative inline-flex cursor-pointer items-center">
          <input id="switch" type="checkbox" className="peer sr-only" onClick={()=> setIsDigital(prev=>!prev)}/>
          <label htmlFor="switch" className="hidden"></label>
          <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gris after:bg-white after:transition-all  peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-rojo"></div>
        </label>
      </div> <p className={`text-[10px] md:text-sm  text-gris ${!isDigital && "text-black font-semibold"}`}>
        Físico
      </p>
    </div>
   
    </section>
  )
}

export default Toggler