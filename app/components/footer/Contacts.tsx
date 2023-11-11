import React from 'react'
import { BsAt, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { footerData } from './Footer'

function Contacts() {
  return (
    <div className="flex flex-col gap-2">
            <h3 className="footer-title">Contactanos</h3>
            <div className="footer-line">
              <BsTelephone />
              <p>{footerData.tel}</p>
            </div>
            <div className="footer-line">
              <BsAt />
              <p>{footerData.mail}</p>
            </div>
            <div className="footer-line">
              <BsGeoAlt />
              <p>{footerData.address}</p>
            </div>
</div>
  )
}

export default Contacts