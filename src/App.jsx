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
    '/boat10.png'
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
        <img src="images/Background.svg" alt="Background pattern" className="background-image" />
      </div>
      <div className="container">
        <header className="header">
          <div className="sticky-header">
            <div className="for-sale-label">For Sale</div>
          </div>
          <div className="header-content">
            <div className="title-group">
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
              Last updated: March 12, 2025 at 3:56 PM EDT - <span className="active-status">Listing active</span>
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
