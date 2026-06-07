import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './App.css';

// Gaborone coordinates
const position: [number, number] = [-24.6541, 25.9087];

type Screen = 'home' | 'booking' | 'searching' | 'driver-found';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  // Fix Leaflet default marker icons (runs once)
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);

  const goTo = (newScreen: Screen) => setScreen(newScreen);

  return (
    <div className="app">
      {/* ==================== HOME SCREEN ==================== */}
      {screen === 'home' && (
        <div className="screen home-screen">
          <div className="map-container">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
              />
              <Marker position={position}>
                <Popup>You are here</Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="home-overlay">
            <div className="home-header">
              <h1>Rova</h1>
              <div className="avatar">KM</div>
            </div>

            <div className="search-box" onClick={() => goTo('booking')}>
              <div className="search-icon">📍</div>
              <span>Where are you going?</span>
            </div>

            <div className="quick-destinations">
              <div className="destination-item" onClick={() => goTo('booking')}>
                <div className="dest-icon">🏠</div>
                <div>
                  <strong>Home</strong>
                  <p>Gaborone West</p>
                </div>
              </div>
              <div className="destination-item" onClick={() => goTo('booking')}>
                <div className="dest-icon">💼</div>
                <div>
                  <strong>Work</strong>
                  <p>Main Mall, Gaborone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== BOOKING SCREEN ==================== */}
      {screen === 'booking' && (
        <div className="screen booking-screen">
          <button className="back-btn" onClick={() => goTo('home')}>
            ← Back
          </button>

          <h2>Book a ride</h2>

          <div className="input-group">
            <div className="input-row">
              <span className="dot green"></span>
              <input
                type="text"
                placeholder="Pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="input-divider"></div>
            <div className="input-row">
              <span className="dot black"></span>
              <input
                type="text"
                placeholder="Drop-off location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
              />
            </div>
          </div>

          <div className="fare-estimate">
            <div className="fare-row">
              <span>Estimated fare</span>
              <strong>BWP 45</strong>
            </div>
            <div className="fare-row">
              <span>Estimated time</span>
              <strong>15 mins</strong>
            </div>
            <div className="fare-row">
              <span>Distance</span>
              <strong>5.2 km</strong>
            </div>
          </div>

          <div className="vehicle-types">
            <div className="vehicle-grid">
              <div className="vehicle-card active">
                <span>🚗</span>
                <p>Economy</p>
                <small>BWP 25</small>
              </div>
              <div className="vehicle-card">
                <span>🚙</span>
                <p>Standard</p>
                <small>BWP 40</small>
              </div>
              <div className="vehicle-card">
                <span>⭐</span>
                <p>Premium</p>
                <small>BWP 80</small>
              </div>
            </div>
          </div>

          <button className="confirm-btn" onClick={() => goTo('searching')}>
            Confirm Ride — BWP 45
          </button>
        </div>
      )}

      {/* ==================== SEARCHING SCREEN ==================== */}
      {screen === 'searching' && (
        <div className="screen searching-screen">
          <div className="searching-content">
            <div className="spinner"></div>
            <h2>Finding your driver...</h2>
            <p>Looking for nearby drivers</p>
            <button className="cancel-btn" onClick={() => goTo('home')}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ==================== DRIVER FOUND SCREEN ==================== */}
      {screen === 'driver-found' && (
        <div className="screen driver-screen">
          <div className="driver-card">
            <h2>Driver found!</h2>
            <div className="driver-info">
              <div className="driver-avatar">JM</div>
              <div>
                <strong>James M.</strong>
                <p>⭐ 4.9 • Toyota Corolla</p>
                <p>Plate: B 123 GP</p>
              </div>
            </div>
            <div className="eta">Arriving in 3 mins</div>
            <button className="contact-btn">📞 Contact Driver</button>
            <button className="cancel-btn" onClick={() => goTo('home')}>
              Cancel Ride
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button className="nav-item active">
          🏠<span>Home</span>
        </button>
        <button className="nav-item">
          🗺️<span>Trips</span>
        </button>
        <button className="nav-item">
          💳<span>Wallet</span>
        </button>
        <button className="nav-item">
          👤<span>Profile</span>
        </button>
      </div>
    </div>
  );
}