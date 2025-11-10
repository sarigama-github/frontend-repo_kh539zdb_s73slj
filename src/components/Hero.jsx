import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/9h5o3VxBNzH3C5m5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-fuchsia-100 drop-shadow-[0_0_25px_rgba(217,70,239,0.35)]">
            Cyberpunk Chicken Noodle Shop
          </h1>
          <p className="mt-6 text-fuchsia-100/80 text-lg">
            Slurp neon-lit comfort in a bowl. Hand-pulled noodles, blazing broth, and crispy chicken — served with future flair.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="inline-flex items-center justify-center rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-5 py-3 font-semibold shadow-[0_0_20px_rgba(217,70,239,0.4)]">
              View Menu
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-cyan-500/80 hover:bg-cyan-500 text-white px-5 py-3 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Our Story
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
    </section>
  )
}

export default Hero
