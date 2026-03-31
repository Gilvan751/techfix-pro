import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import Services from './components/Services'
import Orcamento from './components/Orcamento'
import OrderTracking from './components/OrderTracking'
import Accessories from './components/Accessories'
import Location from './components/Location'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <Orcamento />
        <OrderTracking />
        <Accessories />
        <Location />
      </main>
      <footer className="bg-brand-dark text-white text-center py-6 text-sm">
        <p>© 2026 UP! Celulares — Barra do Garças/MT. Todos os direitos reservados.</p>
        <p className="text-gray-400 mt-1">Av. Senador Valdon Varjão, 2.077 — Jd. Araguaia — Barra Center Shopping</p>
      </footer>
      <WhatsAppButton />
    </div>
  )
}
