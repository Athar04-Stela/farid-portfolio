import React from 'react'

export default function Experience() {
  const data = [
    'Software Engineer Intern – PT Jababeka Tbk (2024)',
    'Independent Study – Laskar AI x NVIDIA (2025)',
    'AWS Cloud Computing – Orbit Future Academy (2024)'
  ]
  return (
    <div className="section">
      <h2>Experience</h2>
      <ul>
        {data.map((item,i)=><li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}
