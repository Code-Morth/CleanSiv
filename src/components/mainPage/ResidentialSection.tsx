import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global'
import { FaArrowRightLong } from 'react-icons/fa6'
export const ResidentialSection = () => {
  return (
    <Container>
      <section className="ResidentialSection">
        <div className="residential-section-container">
          <div className="image-container">
            <Image
              src="/ResidentialService.png"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
          <div className="right-container">
            <h3>PLANES DE LIMPIEZA PARA VIVIENDAS</h3>
            <h2>SERVICIOS DE LIMPIEZA RESIDENCIAL</h2>
            <p>
              ¡Recupera tus fines de semana y disfruta de un hogar impecable con
              nuestros servicios de limpieza residencial!
            </p>
            <p>
              Ofrecemos planes personalizados de limpieza regular, limpieza
              profunda para ocasiones especiales y limpieza para mudanzas,
              adaptados a sus necesidades y presupuesto.
            </p>
            <ul>
              <li>
                <span className='check-bg-blue-container'>
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza regular
              </li>
              <li>
                <span className='check-bg-blue-container'>
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza profunda
              </li>
              <li>
                <span className='check-bg-blue-container'>
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza Move-in/Move
              </li>
              <li>
                <span className='check-bg-blue-container'>
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza de alfombras y cristales
              </li>
            </ul>
            <div className="link-degraded-container">
              <div className="link-degraded-child">
                <Link href="">
                  Solicita un presupuesto
                  <div className='image-arrow-container'>
                    <Image
                      width={1000}
                      height={1000}
                      src="/ArrowBgDegraded.svg"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
