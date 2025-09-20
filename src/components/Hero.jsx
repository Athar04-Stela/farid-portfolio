import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Innovating Intelligent Systems with AI & Mechatronics</h1>
        <p>Fresh Graduate in Mechatronics & Artificial Intelligence  
          Indonesia University of Education | GPA 3.59
          Fresh Graduate | AI & Software Engineer | Tech Enthusiast</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View Projects</a>
          <a href="/CV_Farid.pdf" className="btn" download>Download CV</a>
        </div>
      </div>
      <img src="/images/profile.jpg" alt="Profile" className="hero-img" />
    </div>
  )
}
