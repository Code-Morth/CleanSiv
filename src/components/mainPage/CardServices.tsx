import Image from 'next/image'
import React from 'react'

interface CardServicesType {
  tittle1: string
  tittle2: string
  image: string
  alt:string
}

export const CardServices = ({ tittle1, tittle2, image, alt }: CardServicesType) => {
  return (
    <section className='CardServices'>
      <div className='image-container'>
        <Image src={image} alt={alt} width={1000} height={1000} />
      </div>
      <div className='text-container'>
        <h4>{tittle1}</h4>
        <h5>{tittle2}</h5>
      </div>
    </section>
  )
}
