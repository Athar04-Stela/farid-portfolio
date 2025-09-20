import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')

    emailjs
      .send(
        'service_rhfqg5k',     // ganti dengan Service ID
        'template_3b89qz4',    // ganti dengan Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'rk7-xUbFwJY0qFecF'      // ganti dengan Public Key
      )
      .then(
        () => {
          setStatus('Pesan berhasil dikirim!')
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          console.error('Email error:', error)
          setStatus('Terjadi kesalahan. Coba lagi.')
        }
      )
  }

  return (
    <div className="section">
      <h2>Contact</h2>
      <p>
        Email: atharudin04@gmail.com | Phone: +6289501599119 | IG: @farid.udin25
      </p>
      <p>Atau kirim pesan melalui form di bawah:</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>

      {status && <p className="status">{status}</p>}
    </div>
  )
}
