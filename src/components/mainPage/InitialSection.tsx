import Image from 'next/image'
import React from 'react'
import { Container } from '../global'

export const InitialSection = () => {
  return (
    <>
      <div className="InitialSection">
        <div className="initial-section-container">
          <Container>
            <div className="star-image-container-1">
              <Image src="/Stars.png" width={1000} height={1000} alt="" />
            </div>
            <h3>BIENVENIDO A CLEANSIV </h3>
            <h2>DONDE LA LIMPIEZA Y LA CALIDAD SE ENCUENTRAN</h2>
            <div className="star-image-container-2">
              <Image src="/Stars.png" width={1000} height={1000} alt="" />
            </div>
          </Container>
        </div>
      </div>
    </>
  )
}
