import { useState } from 'react'
import { projects } from './projects'

export default function App() {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-brand-black text-brand-white font-sans">
      <header className="sticky top-0 z-40 bg-brand-black/75 backdrop-blur border-b border-white/10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="R Sharp Construction" className="h-10 w-10 rounded-lg object-cover ring-1 ring-white/20" />
            <div className="leading-tight">
              <p className="text-lg font-semibold">R Sharp Construction</p>
              <p className="text-xs text-white/60">Heritage • Renovation • New Build</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-white text-white/70">Services</a>
            <a href="#projects" className="hover:text-white text-white/70">Projects</a>
            <a href="#about" className="hover:text-white text-white/70">About</a>
            <a href="#contact" className="hover:text-white text-white/70">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-green px-4 py-2 text-brand-black font-semibold shadow hover:shadow-md">Get a quote</a>
          </nav>
        </div>
      </header>

      <section className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">Craftsmanship you can trust.</h1>
          <p className="mt-3 text-brand-green/90 font-semibold">Building with integrity since 2005</p>
          <p className="mt-5 text-lg text-white/70 max-w-prose">
            From listed-building conservation to modern extensions, we deliver durable, beautiful work—on time and on budget—across East Sussex & Kent.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-brand-green text-brand-black px-6 py-3 font-semibold shadow hover:shadow-md">See our work</a>
            <a href="#contact" className="rounded-xl border border-white/15 px-6 py-3 hover:bg-white/5">Request a site visit</a>
          </div>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/80">
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">✓ Fully insured & qualified</li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">✓ Heritage-friendly methods</li>
            <li className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">✓ Transparent pricing</li>
          </ul>
        </div>
        <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl">
          <img src={projects[0].src} alt="Featured project" className="w-full h-full object-cover" />
        </div>
      </section>

      <section id="services" className="container py-16 md:py-24">
        <h2 className="text-3xl font-bold">What we do</h2>
        <p className="mt-3 text-white/70 max-w-prose">End-to-end project delivery with tidy sites, clear communication, and guaranteed workmanship.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Listed Building & Heritage', desc: 'Lime plaster, sash refurbishment, oak framing, conservation best practice.' },
            { title: 'Renovations & Refurbishment', desc: 'Kitchens, bathrooms, structural changes, roofing and reconfiguration.' },
            { title: 'Extensions & New Build', desc: 'Groundworks to finishes — brick, block and timber frame.' },
            { title: 'Lakes & Landscaping', desc: 'Bespoke ponds/lakes, patios, dry-stone walls, gates and lawns.' }
          ].map((s) => (
            <div key={s.title} className="card p-6">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24 bg-white/5 border-y border-white/10">
        <div className="container">
          <h2 className="text-3xl font-bold">Featured projects</h2>
          <p className="mt-3 text-white/70">A selection of recent builds and restorations.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <figure key={i} className="card overflow-hidden">
                <img src={p.src} alt={p.caption} className="w-full h-60 object-cover" />
                <figcaption className="px-4 py-3 text-sm text-white/80">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">About us</h2>
            <p className="mt-4 text-white/80">
              R Sharp Construction is a local, family-run contractor specialising in heritage-sensitive work and high-quality renovations.
              We coordinate closely with planners and building control to keep projects moving and compliant.
            </p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>✓ Fully insured & vetted trades</li>
              <li>✓ Clear, itemised quotations</li>
              <li>✓ Respectful, tidy, and communicative</li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-xl">
            <img src={projects[1].src} alt="About project" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="contact" className="container pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold">Get a quote</h2>
            <p className="mt-3 text-white/70">Tell us about your project and we’ll get back within one working day.</p>
            <form
              className="mt-8 grid gap-4"
              onSubmit={(e) => { e.preventDefault(); setSent(true); window.location.href='mailto:rsharp99@yahoo.co.uk'; }}
            >
              <input placeholder="Your name" required className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
              <input type="email" placeholder="Email" required className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
              <textarea rows="5" placeholder="Project details" required className="rounded-xl border border-white/15 bg-white/5 px-4 py-3" />
              <button className="rounded-xl bg-brand-green text-brand-black px-6 py-3 font-semibold shadow hover:shadow-md">
                {sent ? 'Thanks — we’ll be in touch' : 'Send message'}
              </button>
            </form>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="mt-4 space-y-3 text-white/80">
              <li>📞 07775656660</li>
              <li>✉️ rsharp99@yahoo.co.uk</li>
              <li>📍 East Sussex & Kent</li>
            </ul>
            <div className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10">
              <img src={projects[2].src} alt="Service area" className="w-full h-60 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="container py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© {new Date().getFullYear()} R Sharp Construction. East Sussex & Kent.</p>
          <div className="text-sm text-white/70 flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
