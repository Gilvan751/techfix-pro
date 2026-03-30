import { MapPin, Clock, Phone, Instagram } from 'lucide-react'

const hours = [
  { day: 'Segunda a Sexta', time: '08h às 18h' },
  { day: 'Sábado', time: '08h às 14h' },
  { day: 'Domingo', time: 'Fechado' },
]

export default function Location() {
  return (
    <section id="localizacao" className="py-14 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">Onde Estamos</h2>
          <p className="text-gray-500 mt-2 text-sm">Venha nos visitar ou entre em contato</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-64 md:h-80">
            <iframe
              title="Localização UP! Celulares"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.0!2d-52.2566!3d-15.8901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUzJzI0LjQiUyA1MsKwMTUnMjMuOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-brand-blue mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Endereço</p>
                <p className="text-gray-500 text-sm">Av. Senador Valdon Varjão, 2.077</p>
                <p className="text-gray-500 text-sm">Jd. Araguaia — Barra Center Shopping</p>
                <p className="text-gray-500 text-sm">Barra do Garças/MT</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={20} className="text-brand-green mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark mb-2">Horário de Funcionamento</p>
                {hours.map(h => (
                  <div key={h.day} className="flex justify-between text-sm gap-6">
                    <span className="text-gray-500">{h.day}</span>
                    <span className={`font-medium ${h.time === 'Fechado' ? 'text-red-400' : 'text-brand-dark'}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={20} className="text-purple-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Telefone / WhatsApp</p>
                <a href="tel:6634013354" className="text-brand-blue text-sm hover:underline">(66) 3401-3354</a>
                <span className="text-gray-400 text-sm"> / </span>
                <a href="tel:6699938-9100" className="text-brand-blue text-sm hover:underline">(66) 99938-9100</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Instagram size={20} className="text-pink-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-brand-dark">Instagram</p>
                <a
                  href="https://instagram.com/upcelulares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue text-sm hover:underline"
                >
                  @upcelulares
                </a>
              </div>
            </div>

            <a
              href="https://wa.me/5566999389100"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand-green hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
