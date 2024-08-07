import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global'

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
              <li>Limpieza regular</li>
              <li>Limpieza profunda</li>
              <li>Limpieza Move-in/Move</li>
              <li>Limpieza de alfombras y cristales</li>
            </ul>
            <div className="link-degraded">
              <Link href="">Solicita un presupuesto</Link>
              <div className="arrow-container"></div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  )
}
