import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global'
export const BusinessSection = () => {
  return (
    <Container>
      <section className="BusinessSection">
        <div className="business-section-container">
          <div className="image-container">
            <Image
              src="/BusinessService.png"
              alt=""
              width={100000}
              height={100000}
            />
          </div>
          <div className="right-container">
            <h3>PLANES DE LIMPIEZA PARA OFICINAS</h3>
            <h2>SERVICIOS DE LIMPIEZA EMPRESARIAL</h2>
            <p>
              Cree una impresión duradera en sus clientes y empleados con un
              entorno de trabajo limpio y profesional. Nuestros servicios de
              limpieza comercial no se limitan a la limpieza superficial.
            </p>
            <p>
              Proporcionamos una variedad de servicios para asegurar un entorno
              de trabajo limpio y eficiente, incluyendo la limpieza diaria de
              oficinas, servicios de limpieza general y desinfección
              especializada.
            </p>
            <ul>
              <li>
                <span className="check-bg-blue-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza de oficinas{' '}
              </li>
              <li>
                <span className="check-bg-blue-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Limpieza de conserjería{' '}
              </li>
              <li>
                <span className="check-bg-blue-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Tiendas minoristas{' '}
              </li>
              <li>
                <span className="check-bg-blue-container">
                  <Image
                    width={1000}
                    height={1000}
                    src="/CheckBgBlue.svg"
                    alt=""
                  />
                </span>
                Hoteles y resorts{' '}
              </li>
            </ul>
            <div className="link-degraded-container">
              <div className="link-degraded-child">
                <Link href="/RequestQuote">
                  Solicita un presupuesto
                  <div className="image-arrow-container">
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
