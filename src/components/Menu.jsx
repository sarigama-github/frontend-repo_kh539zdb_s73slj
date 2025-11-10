function Menu() {
  const items = [
    {
      name: 'Neon Shoyu Noodles',
      desc: 'Clear soy broth, springy noodles, soy-ginger chicken, neon scallions',
      price: 12,
      badge: 'signature',
    },
    {
      name: 'Cyber Curry Bowl',
      desc: 'Creamy yellow curry, crispy karaage, pickled radish, chili oil',
      price: 14,
      badge: 'spicy',
    },
    {
      name: 'Plasma Pho Fusion',
      desc: 'Star-anise broth, shredded chicken, herbs, lime, glowing basil oil',
      price: 13,
    },
    {
      name: 'Hologram Udon',
      desc: 'Thick udon, miso-butter chicken, shiitake, neon nori',
      price: 15,
    },
  ]

  return (
    <section id="menu" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-900/10 to-black"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-fuchsia-100">Menu</h2>
        <p className="mt-2 text-fuchsia-100/70">Crafted bowls with a neon edge.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="group relative rounded-xl border border-fuchsia-500/30 bg-black/50 p-6 shadow-[0_0_25px_rgba(217,70,239,0.15)] hover:shadow-[0_0_35px_rgba(217,70,239,0.35)] transition-shadow"
            >
              {item.badge && (
                <span className="absolute -top-2 -right-2 rounded bg-fuchsia-500 text-white text-xs font-bold px-2 py-1 shadow-[0_0_12px_rgba(217,70,239,0.6)]">
                  {item.badge}
                </span>
              )}
              <h3 className="text-xl font-bold text-fuchsia-100">{item.name}</h3>
              <p className="mt-2 text-fuchsia-100/70">{item.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-fuchsia-300 font-extrabold tracking-wide">${item.price.toFixed(2)}</span>
                <button className="rounded border border-fuchsia-500/50 bg-fuchsia-500/10 px-3 py-1 text-fuchsia-100 hover:bg-fuchsia-500/20">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
