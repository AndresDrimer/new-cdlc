
import { BsFacebook, BsHouseHeart, BsInstagram } from 'react-icons/bs'
import { footerData } from './Footer'

function Social() {
  return (
    <div className='flex flex-col gap-2'>
    <h3 className="footer-title">Visitá nuestra Revista</h3>
    <div className="footer-line">
      <BsHouseHeart />
      <a href={footerData.url}>
        <p>{footerData.url}</p>
      </a>
    </div>
    <h3 className="footer-title">Redes sociales</h3>
    <div className="footer-line text-2xl">
      <a href={footerData.facebook} target="_blank">
        <BsFacebook />
      </a>

      <a href={footerData.instagram} target="_blank">
        <BsInstagram />
      </a>
    </div>
  </div>
  )
}

export default Social