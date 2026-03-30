import { Monitor, Battery, Cpu, Droplets, Plug, HelpCircle } from 'lucide-react'

const services = [
  {
    icon: <Monitor size={28} className="text-brand-blue" />,
    title: 'Troca de Tela',
    desc: 'Display original ou compatível. iPhone e Android. Cores vivas e toque preciso.',
    time: 'A partir de 1h',
  },
  {
    icon: <Battery size={28} className="text-brand-green" />,
    title: 'Troca de Bateria',
    desc: 'Bateria nova com capacidade original. Fim do descarregamento rápido.',
    time: 'A partir de 30min',
  },
  {
    icon: <Plug size={28} className="text-yellow-500" />,
    title: 'Conector de Carga',
    desc: 'Celular não carrega? Trocamos o conector com rapidez e garantia.',
    time: 'A partir de 1h',
  },
  {
    icon: <Cpu size={28} className="text-purple-500" />,
    title: 'Reparo em Placa',
    desc: 'Microssoldagem e diagnóstico avançado para falhas de hardware.',
    time: 'Prazo sob consulta',
  },
  {
    icon: <Droplets size={28} className="text-blue-400" />,
    title: 'Banho Químico',
    desc: 'Limpeza técnica profunda para aparelhos com dano por líquido.',
    time: 'A partir de 2h',
  },
  {
    icon: <HelpCircle size={28} className="text-gray-400" />,
    title: 'Outros Problemas',
    desc: 'Câmera, alto-falante, microfone, botões e muito mais. Consulte-nos.',
    time: 'Diagnóstico grátis',
  },
]

export default function Services() {
  const whatsapp = 'https://wa.me/5566999389100?text=Olá!%20Gostaria%20de%20um%20orçamento.'

  return (
    <section id="servicos" className="py-14 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Nossos Serviços</h2>
          <p className="text-gray-500 mt-2 text-sm">Diagnóstico gratuito. Orçamento sem compromisso.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-bold text-brand-dark mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
              <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                {s.time}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-blue hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  )
}
