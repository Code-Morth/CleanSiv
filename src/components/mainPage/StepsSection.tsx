import Image from 'next/image'
import React from 'react'

export const StepsSection = () => {
  return (
    <div className="StepsSection">
      <div className="steps-section-container">
        <h3>MIRA COMO FUNCIONA</h3>
        <h2>PASOS SENCILLOS PARA UN MEDIO AMBIENTE LIMPIO Y SALUDABLE</h2>
        <div className="image-line-container">
          <Image src="/LineWhitDots.png" alt="" className='w-full h-auto' width={1000} height={1000} />
        </div>
        <div className="steps-container">
          <div className="step-container">
            <h4>Cotización y programación gratis</h4>
            <p>
              ¡Llámanos o envíanos un correo electrónico y cuéntanos qué
              necesitas! Nuestro equipo estará encantado de responder a sus
              preguntas y fijaremos una fecha para inspeccionar su propiedad.
            </p>
            <div className="image-icon-container">
              <Image src="/Phone.svg" alt="" width={1000} height={1000} />
            </div>
          </div>
          <div className="step-container">
            <h4>Preparación personalizada</h4>
            <p>
              Personalizamos la limpieza para satisfacer sus necesidades y
              preferencias específicas, y utilizamos suministros ecológicos
              siempre que sea posible.
            </p>
            <div className="image-icon-container">
              <Image src="/House.svg" alt="" width={1000} height={1000} />
            </div>
          </div>
          <div className="step-container">
            <h4>Transformación de limpieza profunda:</h4>
            <p>
              Nuestros profesionales dedicados tienen mucho cuidado en limpiar a
              fondo cada habitación, asegurándose de que su espacio quede
              reluciente, fresco y completamente desinfectado.
            </p>
            <div className="image-icon-container">
              <Image src="/HandShake.svg" alt="" width={1000} height={1000} />
            </div>
          </div>
          <div className="step-container">
            <h4>Satisfacción garantizada</h4>
            <p>
              Estamos orgullosos de nuestro trabajo, puede relajarse, descansar
              y disfrutar de su hogar limpio y reluciente sabiendo que nuestro
              equipo se ha encargado de todo.
            </p>
            <div className="image-icon-container">
              <Image src="/Store.svg" alt="" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
