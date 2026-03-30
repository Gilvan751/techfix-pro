import { ShieldCheck, Star, Clock, Wrench } from 'lucide-react'

const badges = [
  { icon: <ShieldCheck size={22} className="text-brand-green" />, title: 'Garantia de 90 dias', desc: 'Em peças e mão de obra' },
  { icon: <Star size={22} className="text-yellow-400" />, title: 'Peças de Alta Qualidade', desc: 'Originais e compatíveis' },
  { icon: <Clock size={22} className="text-brand-blue" />, title: 'Reparo Express', desc: 'Muitos reparos em até 1h' },
  { icon: <Wrench size={22} className="text-purple-400" />, title: 'Técnicos Certificados', desc: 'iPhone e Android' },
]

export default function TrustBadges() {
  return (
    <section className="bg-white py-8 px-4 shadow-sm">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
            <div className="shrink-0">{b.icon}</div>
            <div>
              <p className="font-semibold text-sm text-brand-dark">{b.title}</p>
              <p className="text-xs text-gray-500">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
