import React from 'react'
import facadeImg from '../assets/facade.jpg'

export default function Contact(){
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-details">
              <h2>Contact Us</h2>
              
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px'}}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="muted" style={{margin: 0}}><a href="mailto:clean2carehyd@gmail.com">clean2carehyd@gmail.com</a></p>
              </div>

              <p style={{marginTop:12}}>We handle commercial and residential facade work. Call our contacts for quick assistance or request a free site visit.</p>

              <div className="contact-address" style={{display: 'flex', gap: '8px', marginTop: '16px'}}>
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{flexShrink: 0, marginTop: '2px'}}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>Clean2Care, 8-5-210/100, 501, Renuka Residency, Shiva enclave, Old Bowenpally, Hyderabad - 500011</div>
              </div>

              <ul className="contact-list">
                <li>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.09.36 2.16.71 3.18a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 2.11-.45c1.02.35 2.09.59 3.18.71A2 2 0 0 1 22 16.92z" fill="currentColor" />
                  </svg>
                  <div style={{display: 'grid', gridTemplateColumns: '140px auto', gap: '12px'}}>
                    <strong>D P Muthu</strong>
                    <span className="phone"><a href="tel:+919866190609">+91 9866190609</a></span>
                  </div>
                </li>
                <li>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.09.36 2.16.71 3.18a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.9-1.9a2 2 0 0 1 2.11-.45c1.02.35 2.09.59 3.18.71A2 2 0 0 1 22 16.92z" fill="currentColor" />
                  </svg>
                  <div style={{display: 'grid', gridTemplateColumns: '140px auto', gap: '12px'}}>
                    <strong>Madhu Kumar</strong>
                    <span className="phone"><a href="tel:+918465052905">+91 8465052905</a></span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-image">
              <img src={facadeImg} alt="Facade cleaning work" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}