import { useState } from "react";

const marcasModelos = {
  iphone: {
    label: "iPhone",
    modelos: ["iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16", "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone SE (3ª geração)", "iPhone SE (2ª geração)", "Outro iPhone"],
    ajuste: 150,
  },
  samsung: {
    label: "Samsung",
    modelos: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23", "Galaxy A55", "Galaxy A35", "Galaxy A15", "Galaxy A54", "Galaxy A34", "Galaxy A14", "Galaxy A04", "Galaxy M14", "Galaxy M34", "Outro Samsung"],
    ajuste: 50,
  },
  motorola: {
    label: "Motorola",
    modelos: ["Moto G85", "Moto G84", "Moto G54", "Moto G34", "Moto G24", "Moto G14", "Moto Edge 50 Pro", "Moto Edge 40", "Moto Edge 30", "Moto G Power", "Moto G Play", "Outro Motorola"],
    ajuste: 30,
  },
  xiaomi: {
    label: "Xiaomi",
    modelos: ["Redmi Note 13 Pro", "Redmi Note 13", "Redmi Note 12", "Redmi 13C", "Redmi 12C", "POCO X6 Pro", "POCO X6", "POCO M6 Pro", "Xiaomi 14", "Xiaomi 13T", "Outro Xiaomi"],
    ajuste: 30,
  },
  lg: {
    label: "LG",
    modelos: ["LG K62", "LG K52", "LG K42", "LG Velvet", "LG Wing", "Outro LG"],
    ajuste: 20,
  },
  positivo: {
    label: "Positivo",
    modelos: ["Positivo Twist 4", "Positivo Q20", "Positivo S560", "Outro Positivo"],
    ajuste: 0,
  },
  outro: {
    label: "Outro",
    modelos: ["Outro modelo"],
    ajuste: 0,
  },
};

const precoBase = {
  tela: 300,
  bateria: 150,
  placa: 400,
  conector: 180,
  camera: 200,
  agua: 250,
  outro: 200,
};

export default function Orcamento() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [problema, setProblema] = useState("");
  const [preco, setPreco] = useState(null);

  const modelosDisponiveis = marca ? marcasModelos[marca]?.modelos ?? [] : [];

  function calcularPreco() {
    if (!marca || !modelo || !problema) return;
    const base = precoBase[problema] ?? 200;
    const ajuste = marcasModelos[marca]?.ajuste ?? 0;
    setPreco(base + ajuste);
  }

  function enviarWhats() {
    const labelMarca = marcasModelos[marca]?.label ?? marca;
    const mensagem = `Olá! Quero um orçamento:\n\n📱 Marca: ${labelMarca}\n📲 Modelo: ${modelo}\n🔧 Problema: ${problema}\n💰 Estimativa: R$ ${preco}\n📍 Cidade: Barra do Garças\n\nVi que vocês fazem reparo rápido 👍`;
    window.open(`https://wa.me/556634013354?text=${encodeURIComponent(mensagem)}`, "_blank");
  }

  const pronto = marca && modelo && problema;

  return (
    <section id="orcamento" className="py-14 px-4 bg-gray-50">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-brand-dark">
            Orçamento Rápido e Automático
          </h2>
          <p className="text-gray-500 mt-2 text-sm">Selecione as opções e receba uma estimativa na hora</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">

          {/* Marca */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Marca</label>
            <select
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
              value={marca}
              onChange={(e) => { setMarca(e.target.value); setModelo(""); setPreco(null); }}
            >
              <option value="">Selecione a marca</option>
              {Object.entries(marcasModelos).map(([key, val]) => (
                <option key={key} value={key}>{val.label}</option>
              ))}
            </select>
          </div>

          {/* Modelo */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Modelo</label>
            <select
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors disabled:opacity-40"
              value={modelo}
              disabled={!marca}
              onChange={(e) => { setModelo(e.target.value); setPreco(null); }}
            >
              <option value="">{marca ? "Selecione o modelo" : "Selecione a marca primeiro"}</option>
              {modelosDisponiveis.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          {/* Problema */}
          <div>
            <label className="block text-sm font-semibold text-brand-dark mb-1">Tipo de problema</label>
            <select
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-white text-sm focus:outline-none focus:border-brand-blue transition-colors"
              value={problema}
              onChange={(e) => { setProblema(e.target.value); setPreco(null); }}
            >
              <option value="">Selecione o problema</option>
              <option value="tela">Tela quebrada / trincada</option>
              <option value="bateria">Bateria descarregando rápido</option>
              <option value="conector">Não carrega (conector)</option>
              <option value="camera">Câmera com problema</option>
              <option value="agua">Caiu na água / molhou</option>
              <option value="placa">Reparo em placa</option>
              <option value="outro">Outro problema</option>
            </select>
          </div>

          {/* Botão calcular */}
          <button
            onClick={calcularPreco}
            disabled={!pronto}
            className="w-full bg-brand-blue hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl transition-colors text-sm"
          >
            Calcular Estimativa
          </button>

          {/* Resultado */}
          {preco && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center space-y-1">
              <p className="text-3xl font-extrabold text-brand-blue">R$ {preco}</p>
              <p className="text-xs text-gray-500">Estimativa — valor final após análise técnica</p>
            </div>
          )}

          {/* Botão WhatsApp */}
          {preco && (
            <button
              onClick={enviarWhats}
              className="w-full bg-brand-green hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              💬 Confirmar pelo WhatsApp
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
