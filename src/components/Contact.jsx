import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Message sent! We will ping you back soon.')
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-900/10 to-black"></div>
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-100">Contact</h2>
        <p className="mt-2 text-fuchsia-100/70">Reserve a seat in our neon booth or drop a line.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full rounded-md border border-fuchsia-500/30 bg-black/40 px-4 py-3 text-fuchsia-100 placeholder-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-md border border-fuchsia-500/30 bg-black/40 px-4 py-3 text-fuchsia-100 placeholder-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
            />
          </div>
          <textarea
            required
            rows={5}
            placeholder="Your message"
            className="w-full rounded-md border border-fuchsia-500/30 bg-black/40 px-4 py-3 text-fuchsia-100 placeholder-fuchsia-300/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 font-semibold shadow-[0_0_20px_rgba(217,70,239,0.4)]"
          >
            Send Message
          </button>
          {status && <p className="text-cyan-300">{status}</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
