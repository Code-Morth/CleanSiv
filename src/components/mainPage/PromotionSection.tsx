import Image from 'next/image'
import React from 'react'

export const PromotionSection = () => {
  return (
    <div className="PromotionSection">
      <div className="promotion-section-container">
        <Image src="/Promotion.png" alt="" width={10000} height={10000} />
      </div>
    </div>
  )
}
