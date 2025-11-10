function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-900/10 to-black"></div>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-100">About Us</h2>
        <p className="mt-4 text-fuchsia-100/80 leading-relaxed">
          Born in the back alleys of Neon District 7, our noodle bar blends old-world soul with future tech. We hand-pull every noodle, simmer broth for hours, and finish each bowl with cyber-grade precision. Whether youre dodging drones or chasing dreams, our bowls keep your story moving.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-cyan-400/30 bg-black/50 p-6">
            <h3 className="text-cyan-300 font-bold">Hand-Pulled</h3>
            <p className="mt-2 text-cyan-100/80">Classic craft meets neon city speed.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-black/50 p-6">
            <h3 className="text-cyan-300 font-bold">Slow-Simmered</h3>
            <p className="mt-2 text-cyan-100/80">Broths built layer by layer, with love.</p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-black/50 p-6">
            <h3 className="text-cyan-300 font-bold">Street-Inspired</h3>
            <p className="mt-2 text-cyan-100/80">Flavors from the alleys that never sleep.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
