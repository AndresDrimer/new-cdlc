"use client"

import { useLocationContext } from "@/app/context/LocationContext"
import LocationToggler from "./LocationToggler";

function LocationCheck() {

    const {isInArgentina, setIsInArgentina} = useLocationContext();

  return (
    <div>  <LocationToggler />
      <p className="text-xs text-gris text-center mt-4">Estás  <span className="">{isInArgentina ? "en" : "fuera de"}</span> Argentina.</p>  
     
    



    </div>
  )
}

export default LocationCheck