import React from 'react'

export default function Venue() {
  return (
    <section id="venue" className="venue">
      <div className="container">
        <h2>Venue & Function Details</h2>
        <div className="venue-grid">
          <div className="venue-item">
            <h3>Ceremony</h3>
            <p>Date: Saturday, December 12, 2026</p>
            <p>Time: 10:00 AM</p>
            <p>Location: The Banyan Hall</p>
            <p>Address: 123 Wedding Lane, Bengaluru</p>
          </div>

          <div className="venue-item">
            <h3>Reception</h3>
            <p>Time: 6:30 PM</p>
            <p>Location: Garden Terrace</p>
            <p>Address: The Banyan Hotel, Bengaluru</p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions</a>
          </div>
        </div>
      </div>
    </section>
  )
}
