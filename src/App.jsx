import React from 'react'
import './styles/index.css'
import './styles/App.css'
import MasonryGallery from './components/MasonryGallery'
import SpecList from './components/SpecList'

// Using the baseUrl from our previous configuration
function App() {
  const boatImages = [
    '/boat1.png',
    '/boat2.png',
    '/boat3.png',
    '/boat4.png',
    '/boat5.png',
    '/boat6.png',
    '/boat7.png',
    '/boat8.png',
    '/boat9.png',
    '/boat10.png',
    '/images/2021-centurion-fi21-power-new.jpg',
    '/images/2021-centurion-fi21-power-new2.jpg',
    '/images/2021-centurion-fi21-power-new3.jpg',
    '/images/2021-centurion-fi21-power-new4.jpg',
    '/images/2021-centurion-fi21-power-new5.jpg'
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
      <div className="notification-banner">
        <div className="notification-content">
          3.5 YEARS REMAINING ON MANUFACTURER WARRANTY
        </div>
      </div>
      <div className="background-wrapper">
        <img src="images/Background.svg" alt="Background pattern" className="background-image" />
      </div>
      <div className="container">
        <header className="header">
          <div className="header-content">
            <div className="title-group">
              <div className="for-sale-label">For Sale</div>
              <h1>2021 Centurion Fi21</h1>
              <div className="price-action-group">
                <div className="price">$119,995</div>
                <a href="tel:+12026000069" className="cta-button">
                  Contact Broker
                </a>
              </div>
            </div>
            <p className="location">
              <span className="icon">📍</span>
              Arlington, VA
            </p>
            <div className="represented-by">
              <span>Represented By:</span>
              <img src="images/saleslogo.svg" alt="Seaworthy Yachts" className="represented-logo" />
            </div>
          </div>
        </header>

        <main>
          <section className="gallery-section">
            <MasonryGallery images={boatImages} />
          </section>

          <section className="info-section">
            <div className="info-grid">
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
            </div>

            <div className="manufacturer-description">
              <h2>Manufacturer Description</h2>
              <div className="description-content">
                <div className="description-text">
                  <p>
                    Safe to say, you can expect the perfect ride, every time, from this pro-tested boat. 
                    The side-to-side balance creates easy-to-achieve, symmetrical waves and wakes, and less 
                    resistance on its running surface, delivers superior handing and 50 percent better fuel economy. 
                    This boat is the top performer and striking from a distance, Centurion has made interior 
                    comfort a focus with the interior finishes including the Cobra Racing Driver's Seat with 
                    slide and 106-degree swivel as well as the easy-access trash receptacle. Options like the 
                    6-way Auto Seat, 180-degree Rearview Camera finish the Fi21's available refinements for 2021. 
                    Choose your custom color combos to express your personal style and put an exclamation point 
                    on the statement this boat makes.
                  </p>
                  <a 
                    href="https://ekprntq7n99.exactdn.com/wp-content/uploads/2024/11/Owners-Manual-2020-2022.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="manual-link"
                  >
                    <svg className="pdf-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"/>
                    </svg>
                    Download Owner's Manual PDF
                  </a>
                </div>
                <img 
                  src="/images/Descriptionimage.png" 
                  alt="Centurion Fi21 Features" 
                  className="description-image"
                />
              </div>
            </div>
          </section>

          <section className="contact-section">
            <h2>Interested in this Boat?</h2>
            <p className="contact-intro">Located in Arlington, VA. Available for viewing by appointment. Contact Seaworthy Yacht Sales for appointment availability.</p>
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
            <p className="listing-status">
              Last updated: March 12, 2025 at 3:56 PM EDT - <span className="active-status"><span className="status-indicator"></span>Listing active</span>
            </p>
            <div className="footer-logos">
              <img src="/images/saleslogo.svg" alt="Seaworthy Yacht Sales" className="footer-logo" />
              <img src="/images/QR code.svg" alt="QR Code" className="qr-code" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
