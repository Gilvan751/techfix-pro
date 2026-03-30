import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Orçamento', href: '#orcamento' },
  { label: 'Rastrear OS', href: '#rastreio' },
  { label: 'Acessórios', href: '#acessorios' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-brand-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-blue rounded-lg w-9 h-9 flex items-center justify-center font-black text-lg leading-none">
            UP!
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">UP! Celulares</p>
            <p className="text-xs text-gray-400 leading-tight">Assistência Técnica</p>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-brand-green transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:6634013354"
          className="hidden md:flex items-center gap-2 bg-brand-blue hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-semibold"
        >
          <Phone size={15} />
          (66) 3401-3354
        </a>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden bg-brand-dark border-t border-gray-700 px-4 pb-4">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 border-b border-gray-700 text-sm hover:text-brand-green transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:6634013354"
            className="mt-3 flex items-center justify-center gap-2 bg-brand-blue px-4 py-3 rounded-lg text-sm font-semibold"
          >
            <Phone size={15} />
            (66) 3401-3354
          </a>
        </div>
      )}
    </header>
  )
}
