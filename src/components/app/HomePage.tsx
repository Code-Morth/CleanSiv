import {
  AboutUsSection,
  BusinessSection,
  InitialSection,
  PromotionSection,
  ResidentialSection,
  ServicesSection,
  StepsSection
} from '@/components/mainPage'

export const HomePage = () => {
  return (
    <>
      <InitialSection />
      <ServicesSection />
      <ResidentialSection />
      <PromotionSection />
      <BusinessSection />
      <StepsSection />
      <AboutUsSection />
    </>
  )
}
