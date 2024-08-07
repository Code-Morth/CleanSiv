import React from 'react'
import { CardServices } from '@/components/mainPage'
import { Container } from '@/components/global'

export const ServicesSection = () => {
  return (
    <Container>
      <div className="ServicesSection">
        <div className="services-section-container">
          <CardServices
            tittle1="Grandes servicios"
            tittle2="Si no queda satisfecho con la limpieza, ¡nos comprometemos a mejorarla!"
            image="/VacuumBlueNoBg.png"
            alt=""
          />
          <CardServices
            tittle1="Equipo de confianza"
            tittle2="Garantizamos un espacio limpio y sin preocupaciones para usted."
            image="/PersonBlueNoBg.png"
            alt=""
          />
          <CardServices
            tittle1="Ahorrando tiempo"
            tittle2="Con rapidez y eficiencia, aseguramos resultados excepcionales en limpieza."
            image="/ClockNoBgBlue.png"
            alt=""
          />
        </div>
      </div>
    </Container>
  )
}
