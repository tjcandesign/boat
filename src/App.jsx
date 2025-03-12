import React from 'react'
import './index.css'
import './styles/App.css'
import MasonryGallery from './components/MasonryGallery'
import SpecList from './components/SpecList'

// Using the baseUrl from our previous configuration
const baseUrl = '/boat'

function App() {
  const baseUrl = 'https://tjcandesign.github.io/boat'
  const assetsUrl = baseUrl + '/images'
  const boatImages = [
    `${baseUrl}/boat/boat1.png`,
    `${baseUrl}/boat/boat2.png`,
    `${baseUrl}/boat/boat3.png`,
    `${baseUrl}/boat/boat4.png`,
    `${baseUrl}/boat/boat5.png`,
    `${baseUrl}/boat/boat6.png`,
    `${baseUrl}/boat/boat7.png`,
    `${baseUrl}/boat/boat8.png`,
    `${baseUrl}/boat/boat9.png`,
    `${baseUrl}/boat/boat10.png`
  ]

  const specs = {
    'Year': '2021',
    'Make': 'Centurion',
    'Model': 'Fi21',
    'Engine': 'PCM 409hp (V8)',
    'Hours': '~160',
    'Warranty': '3.5 years remaining (from 04/2023)',
    'Exterior Color': 'Red',
    'Interior Color': 'Tan',
    'Fuel Type': 'Gasoline',
    'Location': 'Arlington, VA'
  }

  const features = [
    'Up to ~6500lbs of ballast with Ramfill Ballast tanks',
    'Premium N3 tower with board racks',
    'Center-Plate Under-water Exhaust (Silent & no fumes)',
    'Custom matching trailer with LED lighting',
    'Premium boat cover included',
    'Tan interior with red accents',
    'Perfect for wakeboarding and water sports'
  ]

  return (
    <div className="app">
      <div className="background-wrapper">
        <img src={`${assetsUrl}/Background.svg`} alt="Background pattern" className="background-image" />
      </div>
      <div className="container">
        <header className="header">
          <div className="sticky-header">
            <div className="price">$120,000</div>
            <a href="tel:+12026000069" className="cta-button">
              Contact Seller
            </a>
          </div>
          <div className="header-content">
            <div className="title-group">
              <div className="for-sale-label">For Sale</div>
              <h1>2021 Centurion Fi21</h1>
            </div>
            <p className="location">Arlington, VA</p>
            <div className="represented-by">
              <span>Represented By:</span>
              <img src={`${assetsUrl}/logo.svg`} alt="Seaworthy Yachts" className="represented-logo" />
            </div>
          </div>
        </header>

        <main>
          <section className="gallery-section">
            <MasonryGallery images={boatImages} />
          </section>

          <section className="info-section">
            <div className="specs-container">
              <h2>Specifications</h2>
              <SpecList specs={specs} />
            </div>

            <div className="features-container">
              <h2>Key Features</h2>
              <ul className="features-list">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className="contact-section">
            <h2>Interested in this Boat?</h2>
            <p className="contact-intro">Located in Arlington, VA. Available for viewing by appointment.</p>
            <div className="contact-buttons">
              <a 
                href="tel:+12026000069" 
                className="primary-button contact-button"
              >
                <span className="icon">📞</span>
                Call Micah Grisamore
              </a>
              <a 
                href="https://www.instagram.com/seaworthyyachtservices" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="secondary-button contact-button"
              >
                <span className="icon">📸</span>
                Follow on Instagram
              </a>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer-content">
            <p className="listing-status">Last updated: March 12, 2025 - Listing active</p>
            <div className="footer-logos">
              <img src={`${assetsUrl}/mark.svg`} alt="Seaworthy mark" className="footer-mark" />
              <img src={`${assetsUrl}/QR code.svg`} alt="QR Code" className="qr-code" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
