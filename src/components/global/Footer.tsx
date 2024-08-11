import Image from 'next/image'

export const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="top-container">
          <div className="contact-container">
            <h3>Contacto :</h3>
            <p>ejemplo@gmail.com</p>
            <p>+57 312 322 231</p>
          </div>
          <div className="attention-container">
            <h3>Atención :</h3>
            <p>Lunes a Sábado de 8 a 9pm</p>
          </div>
          <div className="social-container">
            <h3>Social :</h3>
            <div className="social-images-container">
              <div className="logo-container">
                <div className="image-container">
                  <Image src="/InstagramLogo.svg" alt='' width={1000} height={1000}/>
                </div>
                <p>Instagram</p>
              </div>
              <div className="logo-container">
                <div className="image-container">
                  <Image src="/FacebookLogo.svg" alt='' width={1000} height={1000}/>
                </div>
                <p>Facebook</p>
              </div>
              <div className="logo-container">
                <div className="image-container">
                  <Image src="/YouTubeLogo.svg" alt='' width={1000} height={1000}/>
                </div>
                <p>Youtube</p>
              </div>
            </div>
          </div>
          <div className="image-logo-container">
            <Image src="/LogoCleansivWhite.png" alt="" width={1000} height={1000} />
          </div>
        </div>
        <div className="bottom-container">
          <p>© 2024 CleanSiv Service. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}
