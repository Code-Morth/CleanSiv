import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/global'
export const AboutUsSection = () => {
  return (
    <Container>
      <section className="AboutUsSection">
        <div className="about-us-section-container">
          <div className="image-container">
            <Image
              src="/AboutUsSection.png"
              alt=""
              width={100000}
              height={100000}
            />
          </div>
          <div className="right-container">
            <h3>SOBRE NOSOTROS</h3>
            <h2>COMPROMISO CON LA EXCELENCIA</h2>
            <p>
              En CleanSiv, nos dedicamos apasionadamente a proporcionar un
              servicio excepcional de limpieza que no solo cumple, sino que
              supera las expectativas de nuestros clientes. Con un enfoque en la
              calidad y la atención al detalle, nos esforzamos por crear
              ambientes limpios y saludables en cada espacio que atendemos.
              Nuestro compromiso con la excelencia se refleja en cada tarea que
              realizamos, asegurando la confianza y la satisfacción total de
              quienes confían en nosotros para el cuidado de sus espacios.
            </p>
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
