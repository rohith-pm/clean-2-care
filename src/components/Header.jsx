import React from 'react'

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-left">
        <div className="logo">
          <img src="/src/assets/logo.jpg" alt="Clean2Care logo" className="site-logo" />
        </div>
      </div>
      <div className="nav-cta">
        <a href="#contact" aria-label="Scroll to contact">Contact Us</a>
      </div>
    </header>
  )
}
