import React from 'react'

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">
      <div className="logo">Muhammad Fariduddin Athar</div>
      <ul>
        {['home','about','projects','experience','skills','contact'].map(item=>(
          <li key={item}>
            <button onClick={()=>scrollTo(item)}>{item.charAt(0).toUpperCase()+item.slice(1)}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
