import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-['IBM_Plex_Sans']">
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.12),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_35%)]" />

      <Navbar />

      <main className="relative pt-16">
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-fuchsia-500/20 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-fuchsia-100/70">© {new Date().getFullYear()} Neon Noodles. All rights reserved.</p>
          <div className="flex items-center gap-4 text-fuchsia-300/80">
            <a href="#menu" className="hover:text-fuchsia-300">Menu</a>
            <a href="#about" className="hover:text-fuchsia-300">About</a>
            <a href="#contact" className="hover:text-fuchsia-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
