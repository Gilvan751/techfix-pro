import { useState } from 'react'
import { Search, CheckCircle, Circle, Clock } from 'lucide-react'

// Mock data — em produção viria de uma API/backend
const mockOrders = {
  'OS001': { client: 'João', device: 'iPhone 13', step: 3 },
  'OS002': { client: 'Maria', device: 'Samsung A55', step: 5 },
  'OS003': { client: 'Carlos', device: 'Motorola G84', step: 2 },
}

const steps = [
  { label: 'Recebido', desc: 'Aparelho entregue na loja' },
  { label: 'Em Análise', desc: 'Técnico diagnosticando' },
  { label: 'Aguardando Peça', desc: 'Peça em pedido/separação' },
  { label: 'Em Reparo', desc: 'Conserto em andamento' },
  { label: 'Pronto para Retirada', desc: 'Pode vir buscar!' },
]

export default function OrderTracking() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState(false)

  function handleSearch(e) {
    e.preventDefault()
    const order = mockOrders[code.toUpperCase().trim()]
    if (order) {
      setResult(order)
      setError(false)
    } else {
      setResult(null)
      setError(true)
    }
  }

  return (
    <section id="rastreio" className="py-14 px-4 bg-brand-dark text-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold">Rastrear Ordem de Serviço</h2>
          <p className="text-gray-400 mt-2 text-sm">Digite o código que recebeu no momento da entrega</p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Ex: OS001"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-blue text-sm"
          />
          <button
            type="submit"
            className="bg-brand-blue hover:bg-blue-700 transition-colors px-5 py-3 rounded-xl font-semibold flex items-center gap-2 text-sm"
          >
            <Search size={16} />
            Buscar
          </button>
        </form>

        {error && (
          <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-center text-sm text-red-300">
            Código não encontrado. Verifique o número na sua OS ou entre em contato.
          </div>
        )}

        {result && (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="mb-5">
              <p className="text-sm text-gray-400">Cliente: <span className="text-white font-semibold">{result.client}</span></p>
              <p className="text-sm text-gray-400">Aparelho: <span className="text-white font-semibold">{result.device}</span></p>
            </div>

            <div className="space-y-4">
              {steps.map((s, i) => {
                const num = i + 1
                const isDone = result.step > num
                const isActive = result.step === num
                return (
                  <div key={s.label} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      {isDone
                        ? <CheckCircle size={20} className="text-brand-green" />
                        : isActive
                          ? <Clock size={20} className="text-yellow-400 animate-pulse" />
                          : <Circle size={20} className="text-gray-600" />
                      }
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isActive ? 'text-yellow-400' : isDone ? 'text-brand-green' : 'text-gray-500'}`}>
                        {s.label}
                      </p>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {result.step === 5 && (
              <div className="mt-5 bg-brand-green/20 border border-brand-green/40 rounded-xl p-3 text-center text-brand-green font-semibold text-sm">
                🎉 Seu aparelho está pronto! Venha buscar.
              </div>
            )}
          </div>
        )}

        <p className="text-center text-xs text-gray-500 mt-4">
          Teste com os códigos: OS001, OS002, OS003
        </p>
      </div>
    </section>
  )
}
