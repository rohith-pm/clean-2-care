import React from 'react'

const services = [
  {title:'Facade cleaning', desc:'High-rise and low-rise facade cleaning using safe methods.'},
  {title:'Silicon work', desc:'Silicone sealing and joint repairs for weatherproofing.'},
  {title:'Glass replacement', desc:'Supply and replace damaged facade glasses.'},
  {title:'ACP service', desc:'Aluminium Composite Panel repairs and maintenance.'},
  {title:'Bird net and spikes', desc:'Bird-proofing solutions: nets and spikes.'}
]

export default function Services(){
  return (
    <section className="services">
      <div className="container">
        <h2 style={{margin:'0 0 12px'}}>Our Services</h2>
        <p className="muted" style={{margin:'0 0 18px'}}>Comprehensive facade maintenance solutions.</p>
        <div className="services-grid">
          {services.map(s=> (
            <div className="service-card" key={s.title}>
              <h3>{s.title}</h3>
              <p style={{color:'#555',margin:0}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
