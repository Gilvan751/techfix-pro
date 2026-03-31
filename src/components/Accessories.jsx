import { ShoppingCart, MessageCircle } from 'lucide-react'

const products = [
  { emoji: '🔌', name: 'Carregador Turbo 20W', desc: 'USB-C. Compatível com iPhone e Android.', price: 'R$ 49,90' },
  { emoji: '🛡️', name: 'Película de Vidro 3D', desc: 'Proteção total. Borda a borda.', price: 'R$ 29,90' },
  { emoji: '📱', name: 'Capa Anti-Impacto', desc: 'Proteção militar. Vários modelos.', price: 'R$ 39,90' },
  { emoji: '🔋', name: 'Bateria Original', desc: 'iPhone e Samsung. Com garantia.', price: 'Consulte' },
  { emoji: '🎧', name: 'Fone Bluetooth', desc: 'Qualidade de som premium.', price: 'R$ 89,90' },
  { emoji: '🔦', name: 'Cabo USB-C 2m', desc: 'Carga rápida e dados. Reforçado.', price: 'R$ 24,90' },
]

export default function Accessories() {
  function buildWhatsApp(product, price) {
    const msg = encodeURIComponent(
      `Olá! Tenho interesse no seguinte produto:\n\n🛍️ Produto: ${product}\n💰 Valor: ${price}\n📍 Cidade: Barra do Garças\n\nAinda está disponível?`
    )
    return `https://wa.me/556634013354?text=${msg}`
  }

  return (
    <section id="acessorios" className="py-14 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Loja de Acessórios</h2>
          <p className="text-gray-500 mt-2 text-sm">Produtos selecionados para proteger e potencializar seu celular</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <div className="text-4xl mb-3">{p.emoji}</div>
              <h3 className="font-bold text-brand-dark text-sm mb-1">{p.name}</h3>
              <p className="text-gray-500 text-xs mb-3 flex-1">{p.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-extrabold text-brand-blue text-sm">{p.price}</span>
                <a
                  href={buildWhatsApp(p.name, p.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-green hover:bg-green-500 text-white p-2 rounded-lg transition-colors"
                  aria-label={`Comprar ${p.name}`}
                >
                  <MessageCircle size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
