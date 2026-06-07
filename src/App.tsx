import './App.css'

export default function App() {
  return (
    <div className="app">

      <nav>
        <div className="logo">Rova</div>
        <div className="nav-links">
          <a href="#">Ride</a>
          <a href="#">Drive</a>
          <a href="#">About</a>
        </div>
        <button className="nav-btn">Get Started</button>
      </nav>

      <section className="hero">
        <h1>Your ride,<br />your way.</h1>
        <p>Safe, affordable rides available anytime — wherever you are in the world.</p>
        <div className="hero-buttons">
          <button className="btn-primary">Request a Ride</button>
          <button className="btn-secondary">Become a Driver</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <h3>50,000+</h3>
          <p>Rides completed</p>
        </div>
        <div className="stat-item">
          <h3>120+</h3>
          <p>Cities covered</p>
        </div>
        <div className="stat-item">
          <h3>4.9★</h3>
          <p>Average rating</p>
        </div>
        <div className="stat-item">
          <h3>10,000+</h3>
          <p>Active drivers</p>
        </div>
      </section>

      <section className="features">
        <h2>Why choose Rova?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="icon">🛡️</span>
            <h3>Safe & Verified</h3>
            <p>Every driver is background checked and verified before they can drive on Rova.</p>
          </div>
          <div className="feature-card">
            <span className="icon">⚡</span>
            <h3>Fast Pickup</h3>
            <p>Get matched with a nearby driver in seconds. No waiting, no hassle.</p>
          </div>
          <div className="feature-card">
            <span className="icon">💰</span>
            <h3>Fair Pricing</h3>
            <p>Transparent prices with no hidden fees. Know your fare before you ride.</p>
          </div>
          <div className="feature-card">
            <span className="icon">🌍</span>
            <h3>Available Worldwide</h3>
            <p>From Gaborone to Lagos to Nairobi — Rova is expanding across the globe.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Enter your destination</h3>
            <p>Open the app and type where you want to go.</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <h3>Get matched instantly</h3>
            <p>We find the nearest available driver for you.</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <h3>Ride and pay easily</h3>
            <p>Enjoy your ride and pay seamlessly in the app.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>What riders say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"Rova is the best ride app I have used. Fast, affordable and the drivers are always professional."</p>
            <div className="testimonial-author">
              <div className="avatar">TM</div>
              <div>
                <strong>Thabo M.</strong>
                <span>Gaborone, Botswana</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"I use Rova every day to get to work. Never been late since I started using it. Highly recommend!"</p>
            <div className="testimonial-author">
              <div className="avatar">AN</div>
              <div>
                <strong>Amara N.</strong>
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p>"Finally a ride app that actually works in my city. The pricing is fair and transparent."</p>
            <div className="testimonial-author">
              <div className="avatar">SK</div>
              <div>
                <strong>Sarah K.</strong>
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="driver-section">
        <div className="driver-content">
          <h2>Drive with Rova.<br />Earn on your terms.</h2>
          <p>Set your own hours, be your own boss. Join thousands of drivers already earning with Rova.</p>
          <button className="btn-primary">Start Driving</button>
        </div>
        <div className="driver-stats">
          <div className="stat">
            <h3>BWP 5,000+</h3>
            <p>Average monthly earnings</p>
          </div>
          <div className="stat">
            <h3>Flexible</h3>
            <p>Work whenever you want</p>
          </div>
          <div className="stat">
            <h3>Weekly</h3>
            <p>Fast payouts to your account</p>
          </div>
        </div>
      </section>

      <section className="safety">
        <div className="safety-content">
          <h2>Your safety is our priority</h2>
          <p>Every ride on Rova is designed with your safety in mind.</p>
          <div className="safety-items">
            <div className="safety-item">
              <span>✓</span>
              <p>Real-time trip tracking shared with loved ones</p>
            </div>
            <div className="safety-item">
              <span>✓</span>
              <p>24/7 emergency support button in the app</p>
            </div>
            <div className="safety-item">
              <span>✓</span>
              <p>All drivers verified with background checks</p>
            </div>
            <div className="safety-item">
              <span>✓</span>
              <p>Cashless payments — no need to carry cash</p>
            </div>
            <div className="safety-item">
              <span>✓</span>
              <p>Two-way ratings system keeps everyone accountable</p>
            </div>
          </div>
        </div>
      </section>

      <section className="download">
        <h2>Get the Rova app</h2>
        <p>Available on iOS and Android. Download now and get your first ride free.</p>
        <div className="download-buttons">
          <button className="download-btn">App Store</button>
          <button className="download-btn">Google Play</button>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Rova</div>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
          <a href="#">Careers</a>
        </div>
        <p className="footer-copy">2026 Rova. All rights reserved.</p>
      </footer>

    </div>
  )
}