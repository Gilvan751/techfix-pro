import { Zap, Search, MessageCircle } from 'lucide-react'

export default function Hero() {
  const whatsapp = `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Preciso de assistência para meu celular.\n\n📱 Modelo: \n🔧 Defeito: \n⏱️ Urgência: \n📍 Cidade: Barra do Garças\n\nVi que vocês fazem reparo rápido 👍')}`

  return (
    <section className="bg-gradient-to-br from-brand-dark via-[#1a2332] to-[#0052CC] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          ⚡ Reparo Express — Pronto em até 1h
        </span>

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
          Seu celular quebrou?<br />
          <span className="text-brand-green">A gente resolve.</span>
        </h1>

        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto">
          iPhone e Android. Tela, bateria, placa e muito mais. Garantia de até 90 dias em todos os serviços.
          Barra do Garças/MT.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-brand-green hover:bg-green-500 transition-colors text-white font-bold px-6 py-4 rounded-xl text-base shadow-lg"
          >
            <MessageCircle size={20} />
            Orçamento via WhatsApp
          </a>
          <a
            href="#rastreio"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white font-semibold px-6 py-4 rounded-xl text-base border border-white/20"
          >
            <Search size={20} />
            Rastrear meu conserto
          </a>
        </div>

        {/* Quick stats */}
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-sm mx-auto">
          {[
            { icon: <Zap size={18} />, value: '+5.000', label: 'Reparos feitos' },
            { icon: '⭐', value: '4.9', label: 'Avaliação média' },
            { icon: '🛡️', value: '90 dias', label: 'Garantia' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-brand-green text-xl mb-1 flex justify-center">{s.icon}</div>
              <p className="font-bold text-lg leading-tight">{s.value}</p>
              <p className="text-xs text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
