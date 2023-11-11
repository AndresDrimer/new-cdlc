import { useLocationContext } from '@/app/context/LocationContext';
import { BsSend } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';


function UpperPartFooter() {
    const { isInArgentina } = useLocationContext();

  return (
    <div className="w-full mx-auto py-8 ">
          {isInArgentina ? (
            <div className="flex flex-col justify-center items-center">
              <CiDeliveryTruck size={50} className="text-gris" />
              <h3 className=" uppercase tracking-wider">Enviamos tu compra</h3>
              <p className="uppercase ">Sin cargo a todo el país</p>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center">
              <BsSend size={45} className="text-gris" />
              <h3 className=" uppercase mt-2 tracking-wide">
                Tus libros digitales a todo el mundo
              </h3>
              <p className="uppercase ">
                libros físicos por DHL puerta a puerta
              </p>
            </div>
          )}
        </div>
  )
}

export default UpperPartFooter