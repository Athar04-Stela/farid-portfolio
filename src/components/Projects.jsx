import React from 'react'

const projects = [
  {img:'/images/project1.png',title:'Deepfake Video Detection Web',desc:'Web system mendeteksi video deepfake.'},
  {img:'/images/project2.png',title:'Facial Detection App (Laskar AI)',desc:'Aplikasi deteksi wajah untuk kesehatan.'},
  {img:'/images/project3.png',title:'Weather Forecast ML System',desc:'Prediksi cuaca dengan machine learning.'},
  {img:'/images/project4.png',title:'Email Scheduling Automation',desc:'Otomatisasi jadwal pengiriman email.'}
]

export default function Projects() {
  return (
    <div className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p,i)=>(
          <div key={i} className="card">
            <img src={p.img} alt={p.title}/>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
