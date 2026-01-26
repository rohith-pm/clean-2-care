import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1>Professional Facade Cleaning</h1>
          <p>Clean 2 Care provides safe, reliable facade cleaning, glass & ACP services, silicone work, and bird protection solutions.</p>
          
          <div className="hero-badges">
            <div className="badge">
              <span className="badge-number">21+ Years</span>
              <span className="badge-label">Founder Experience</span>
            </div>
            <div className="badge">
              <span className="badge-number">100%</span>
              <span className="badge-label">Customer Satisfaction</span>
            </div>
            <div className="badge">
              <span className="badge-number">✓</span>
              <span className="badge-label">Fully Insured & Licensed</span>
            </div>
          </div>
          
          <div className="cta-row">
            <a className="btn" href="mailto:clean2carehyd@gmail.com">Email Us</a>
          </div>
        </div>
        <div className="hero-image" aria-hidden>
          <div className="hero-visual">Trusted • Safe • Efficient</div>
          <div className="hero-decoration"></div>
        </div>
      </div>
    </section>
  )
}
