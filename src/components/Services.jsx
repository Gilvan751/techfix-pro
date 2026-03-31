import { Monitor, Battery, Cpu, Droplets, Plug, HelpCircle } from 'lucide-react'

const services = [
  {
    icon: <Monitor size={28} className="text-brand-blue" />,
    title: 'Troca de Tela',
    desc: 'Display original ou compatível. iPhone e Android. Cores vivas e toque preciso.',
    time: 'A partir de 1h',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Meu celular está com a tela quebrada. Gostaria de um orçamento.\n\n📱 Modelo: \n📍 Cidade: Barra do Garças')}`,
  },
  {
    icon: <Battery size={28} className="text-brand-green" />,
    title: 'Troca de Bateria',
    desc: 'Bateria nova com capacidade original. Fim do descarregamento rápido.',
    time: 'A partir de 30min',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Preciso trocar a bateria do meu celular. Pode me informar o valor?\n\n📱 Modelo: \n📍 Cidade: Barra do Garças')}`,
  },
  {
    icon: <Plug size={28} className="text-yellow-500" />,
    title: 'Conector de Carga',
    desc: 'Celular não carrega? Trocamos o conector com rapidez e garantia.',
    time: 'A partir de 1h',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Meu celular não está carregando. Gostaria de um orçamento para o conector de carga.\n\n📱 Modelo: \n📍 Cidade: Barra do Garças')}`,
  },
  {
    icon: <Cpu size={28} className="text-purple-500" />,
    title: 'Reparo em Placa',
    desc: 'Microssoldagem e diagnóstico avançado para falhas de hardware.',
    time: 'Prazo sob consulta',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Preciso de um reparo em placa / diagnóstico avançado no meu celular.\n\n📱 Modelo: \n🔧 Problema: \n📍 Cidade: Barra do Garças')}`,
  },
  {
    icon: <Droplets size={28} className="text-blue-400" />,
    title: 'Banho Químico',
    desc: 'Limpeza técnica profunda para aparelhos com dano por líquido.',
    time: 'A partir de 2h',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Meu celular caiu na água / teve contato com líquido. Gostaria de um orçamento para banho químico.\n\n📱 Modelo: \n📍 Cidade: Barra do Garças')}`,
  },
  {
    icon: <HelpCircle size={28} className="text-gray-400" />,
    title: 'Outros Problemas',
    desc: 'Câmera, alto-falante, microfone, botões e muito mais. Consulte-nos.',
    time: 'Diagnóstico grátis',
    wa: `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Preciso de assistência para meu celular.\n\n📱 Modelo: \n🔧 Defeito: \n⏱️ Urgência: \n📍 Cidade: Barra do Garças\n\nVi que vocês fazem reparo rápido 👍')}`,
  },
]

export default function Services() {
  const whatsappGeral = `https://wa.me/556634013354?text=${encodeURIComponent('Olá! Preciso de assistência para meu celular.\n\n📱 Modelo: \n🔧 Defeito: \n⏱️ Urgência: \n📍 Cidade: Barra do Garças\n\nVi que vocês fazem reparo rápido 👍')}`

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
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              <div className="mb-3">{s.icon}</div>
              <h3 className="font-bold text-brand-dark mb-1">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3 flex-1">{s.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1 rounded-full">
                  {s.time}
                </span>
                <a
                  href={s.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-brand-green hover:underline flex items-center gap-1"
                >
                  💬 Orçar
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={whatsappGeral}
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
