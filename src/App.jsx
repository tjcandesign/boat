import React from 'react'
import './styles/App.css'
import ImageGallery from './components/ImageGallery'
import SpecList from './components/SpecList'

function App() {
  const baseUrl = '/boat'
  const boatImages = [
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.07.49 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.07.56 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.01 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.06 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.11 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.17 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.22 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.27 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.33 PM.png`,
    `${baseUrl}/images/boat/Screenshot 2025-03-11 at 4.08.39 PM.png`
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
      <div className="container">
        <header className="header">
          <div className="header-content">
            <h1>2021 Centurion Fi21</h1>
            <div className="price">$120,000</div>
            <p className="location">Arlington, VA</p>
          </div>
        </header>

        <main>
          <section className="gallery-section">
            <ImageGallery images={boatImages} />
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
          <p>Listed on {new Date().toLocaleDateString()}</p>
          <p>Warranty Information: Factory warranty remaining until 04/2026</p>
        </footer>
      </div>
    </div>
  )
}

export default App
