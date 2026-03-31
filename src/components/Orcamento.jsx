import { useState } from "react";

export default function Orcamento() {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [problema, setProblema] = useState("");
  const [preco, setPreco] = useState(null);

  function calcularPreco() {
    let valor = 0;

    // preço base por problema
    if (problema === "tela") valor = 300;
    else if (problema === "bateria") valor = 150;
    else if (problema === "placa") valor = 400;
    else valor = 200;

    // ajuste por marca
    if (marca === "iphone") valor += 150;
    if (marca === "samsung") valor += 50;

    setPreco(valor);
  }

  function enviarWhats() {
    const mensagem = `Olá! Quero orçamento:\n\n📱 Marca: ${marca}\n📱 Modelo: ${modelo}\n🔧 Problema: ${problema}\n💰 Valor estimado: R$ ${preco}`;

    const url =
      "https://wa.me/556634013354?text=" + encodeURIComponent(mensagem);

    window.open(url, "_blank");
  }

  return (
    <div className="bg-gray-900 p-6 rounded-2xl max-w-md mx-auto text-white shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Orçamento Online
      </h2>

      <select
        className="w-full p-2 mb-3 rounded bg-gray-800"
        onChange={(e) => setMarca(e.target.value)}
      >
        <option value="">Selecione a marca</option>
        <option value="iphone">iPhone</option>
        <option value="samsung">Samsung</option>
        <option value="xiaomi">Xiaomi</option>
      </select>

      <input
        type="text"
        placeholder="Modelo (Ex: iPhone 11)"
        className="w-full p-2 mb-3 rounded bg-gray-800"
        onChange={(e) => setModelo(e.target.value)}
      />

      <select
        className="w-full p-2 mb-3 rounded bg-gray-800"
        onChange={(e) => setProblema(e.target.value)}
      >
        <option value="">Tipo de problema</option>
        <option value="tela">Tela quebrada</option>
        <option value="bateria">Bateria</option>
        <option value="placa">Placa</option>
        <option value="outro">Outro</option>
      </select>

      <button
        onClick={calcularPreco}
        className="w-full bg-green-500 p-2 rounded mb-3 font-bold"
      >
        Calcular Orçamento
      </button>

      {preco && (
        <div className="text-center mb-3">
          <p className="text-xl font-bold">R$ {preco}</p>
          <p className="text-sm text-gray-400">
            Valor estimado (pode variar após análise)
          </p>
        </div>
      )}

      {preco && (
        <button
          onClick={enviarWhats}
          className="w-full bg-green-600 p-2 rounded font-bold"
        >
          Enviar para WhatsApp
        </button>
      )}
    </div>
  );
}