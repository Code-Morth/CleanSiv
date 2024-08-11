import { Container } from '@/components/global'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaCalendarAlt, FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

export const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <Container>
          <div className="top-container">
            <div className="top-left-container">
              <div className="top-left">
                <IoIosMail />
                <p>correo@gmail.com</p>
              </div>
              <div className="top-left">
                <BsFillTelephoneFill />
                <p>999 999 999</p>
              </div>
              <div className="top-left">
                <FaCalendarAlt />
                <p>Lunes - Sabado: 8 am - 9 pm</p>
              </div>
            </div>
            <div className="top-right-container">
              <div className="top-right">
                <FaFacebook />
              </div>
              <div className="top-right">
                <AiFillInstagram />
              </div>
              <div className="top-right">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="logo-container">
              <Image
                width={1000}
                height={1000}
                src="/LogoCleansiv.png"
                alt=""
                className="logo"
              />
            </div>
            <Link href="">Inicio</Link>
            <Link href="">Limpieza Residencial</Link>
            <Link href="">Limpieza Empresarial</Link>
            <Link href="">Cómo Trabajamos</Link>
            <Link href="">Galería</Link>
            <Link href="">Sobre Nosotros</Link>
            <Link href="/RequestQuote" className="contact">
              Contactanos
              <FaArrowRightLong />
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}
