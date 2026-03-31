import { useState } from 'react'
import { ChevronRight, ChevronLeft, Send } from 'lucide-react'

const brands = ['iPhone', 'Samsung', 'Motorola', 'Xiaomi', 'LG', 'Outro']

const models = {
  iPhone: ['iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone X/XS/XR', 'Outro iPhone'],
  Samsung: ['Galaxy S24', 'Galaxy S23', 'Galaxy A55', 'Galaxy A35', 'Galaxy A15', 'Galaxy A54', 'Outro Samsung'],
  Motorola: ['Moto G84', 'Moto G54', 'Moto G34', 'Edge 40', 'Outro Motorola'],
  Xiaomi: ['Redmi Note 13', 'Redmi 13C', 'POCO X6', 'Outro Xiaomi'],
  LG: ['LG K62', 'LG K52', 'Outro LG'],
  Outro: ['Outro modelo'],
}

const problems = [
  'Tela quebrada / trincada',
  'Tela sem imagem / apagada',
  'Bateria descarregando rápido',
  'Não carrega',
  'Caiu na água / molhou',
  'Não liga',
  'Câmera com problema',
  'Alto-falante / microfone',
  'Botões não funcionam',
  'Outro problema',
]

export default function QuoteForm() {
  const [step, setStep] = useState(1)
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [problem, setProblem] = useState('')
  const [name, setName] = useState('')

  function buildWhatsApp() {
    const msg = encodeURIComponent(
      `Olá! Preciso de assistência para meu celular.\n\n📱 Marca: ${brand}\n📲 Modelo: ${model}\n🔧 Defeito: ${problem}\n👤 Nome: ${name || 'Não informado'}\n📍 Cidade: Barra do Garças\n\nVi que vocês fazem reparo rápido 👍`
    )
    return `https://wa.me/556634013354?text=${msg}`
  }

  const steps = ['Marca', 'Modelo', 'Problema', 'Enviar']

  return (
    <section id="orcamento" className="py-14 px-4 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Orçamento Rápido</h2>
          <p className="text-gray-500 mt-2 text-sm">3 passos e seu orçamento vai direto pro WhatsApp</p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => {
            const num = i + 1
            const isDone = step > num
            const isActive = step === num
            return (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all
                  ${isDone ? 'bg-brand-green text-white' : isActive ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-400'}`}>
                  {isDone ? '✓' : num}
                </div>
                <span className={`text-xs hidden sm:block ${isActive ? 'text-brand-blue font-semibold' : 'text-gray-400'}`}>{s}</span>
                {i < steps.length - 1 && <div className="w-6 h-px bg-gray-200 mx-1" />}
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm">
          {/* Step 1 — Brand */}
          {step === 1 && (
            <div>
              <p className="font-semibold text-brand-dark mb-4">Qual a marca do aparelho?</p>
              <div className="grid grid-cols-2 gap-3">
                {brands.map(b => (
                  <button
                    key={b}
                    onClick={() => { setBrand(b); setModel(''); setStep(2) }}
                    className={`py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all
                      ${brand === b ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-gray-200 bg-white hover:border-brand-blue text-brand-dark'}`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 — Model */}
          {step === 2 && (
            <div>
              <p className="font-semibold text-brand-dark mb-4">Qual o modelo?</p>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
                {(models[brand] || ['Outro modelo']).map(m => (
                  <button
                    key={m}
                    onClick={() => { setModel(m); setStep(3) }}
                    className={`py-3 px-4 rounded-xl border-2 font-medium text-sm text-left transition-all
                      ${model === m ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-gray-200 bg-white hover:border-brand-blue text-brand-dark'}`}
                  >
                    {m}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(1)} className="mt-4 flex items-center gap-1 text-sm text-gray-400 hover:text-brand-blue transition-colors">
                <ChevronLeft size={16} /> Voltar
              </button>
            </div>
          )}

          {/* Step 3 — Problem */}
          {step === 3 && (
            <div>
              <p className="font-semibold text-brand-dark mb-4">Qual o problema?</p>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
                {problems.map(p => (
                  <button
                    key={p}
                    onClick={() => { setProblem(p); setStep(4) }}
                    className={`py-3 px-4 rounded-xl border-2 font-medium text-sm text-left transition-all
                      ${problem === p ? 'border-brand-blue bg-blue-50 text-brand-blue' : 'border-gray-200 bg-white hover:border-brand-blue text-brand-dark'}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="mt-4 flex items-center gap-1 text-sm text-gray-400 hover:text-brand-blue transition-colors">
                <ChevronLeft size={16} /> Voltar
              </button>
            </div>
          )}

          {/* Step 4 — Send */}
          {step === 4 && (
            <div>
              <p className="font-semibold text-brand-dark mb-4">Quase lá! Seu nome (opcional):</p>
              <input
                type="text"
                placeholder="Ex: João Silva"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue mb-4"
              />

              <div className="bg-blue-50 rounded-xl p-4 mb-4 text-sm space-y-1">
                <p><span className="font-semibold">Marca:</span> {brand}</p>
                <p><span className="font-semibold">Modelo:</span> {model}</p>
                <p><span className="font-semibold">Problema:</span> {problem}</p>
              </div>

              <a
                href={buildWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors text-base"
              >
                <Send size={18} />
                Enviar para o Técnico
              </a>

              <button onClick={() => setStep(3)} className="mt-3 flex items-center gap-1 text-sm text-gray-400 hover:text-brand-blue transition-colors">
                <ChevronLeft size={16} /> Voltar
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
