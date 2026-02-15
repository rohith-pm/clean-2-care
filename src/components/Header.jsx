import React from 'react'
import logoImg from '../assets/logo.jpg'
export default function Header(){
  return (
    <header className="site-header">
      <div className="header-left">
        <div className="logo">
          <img src={logoImg} alt="Clean2Care Logo" className="site-logo" />
        </div>
      </div>
      <div className="nav-cta">
        <a href="#contact" aria-label="Scroll to contact">Contact Us</a>
      </div>
    </header>
  )
}
