import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-fuchsia-500/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <span className="relative text-xl font-extrabold tracking-wide text-fuchsia-300">
              <span className="absolute -inset-1 blur-md bg-fuchsia-500/40 rounded"></span>
              <span className="relative">Neon Noodles</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-fuchsia-100/80 hover:text-fuchsia-300 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-fuchsia-200 hover:text-fuchsia-100 hover:bg-fuchsia-500/10 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded px-3 py-2 text-fuchsia-100/90 hover:text-fuchsia-100 hover:bg-fuchsia-500/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
