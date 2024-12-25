import React from "react";
import Navbar from "../components/navbar";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Importando ícones do lucide-react

const Perguntas: React.FC = () => {
  const pergunta = {
    texto: "Qual é o principal objetivo do React?",
    respostas: [
      "Gerar páginas estáticas",
      "Construir interfaces de usuário interativas",
      "Realizar operações de banco de dados",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-40 relative">
      <Navbar />
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Pergunta</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <p className="text-lg text-gray-800 mb-6">{pergunta.texto}</p>
        <div className="flex flex-col gap-4">
          {pergunta.respostas.map((resposta, index) => (
            <label
              key={index}
              className="flex items-center gap-4 bg-gray-100 p-3 rounded hover:bg-gray-200 cursor-pointer transition"
            >
              <input
                type="checkbox"
                className="h-5 w-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              <span className="text-gray-800">{resposta}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Botão circular no canto inferior esquerdo */}
      <button
        className="fixed bottom-6 left-6 bg-purple-700 text-white rounded-full p-4 shadow-lg hover:bg-purple-500 transition flex items-center justify-center"
        aria-label="Pergunta Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Botão circular no canto inferior direito */}
      <button
        className="fixed bottom-6 right-6 bg-purple-700 text-white rounded-full p-4 shadow-lg hover:bg-purple-500 transition flex items-center justify-center"
        aria-label="Próxima Pergunta"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Perguntas;
