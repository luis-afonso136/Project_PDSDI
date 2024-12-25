import React from "react";
import Navbar from "../components/navbar";

const AdminPanel: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800 pt-16">
      <Navbar />

      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-8">Painel de Administração</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Total de Utilizadores
            </h2>
            <p className="text-gray-600 text-4xl font-bold">15</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Novos Utilizadores
            </h2>
            <p className="text-gray-600 text-4xl font-bold">5</p>
          </div>
        </div>

        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Lista de Utilizadores
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Nome</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Tipo De Utilizador</th>
                  <th className="py-2 px-4 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Luis Afonso</td>
                  <td className="py-2 px-4">luis.manuel.afonso@ipvc.pt</td>
                  <td className="py-2 px-4">Administrador</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2 justify-start">
                      <button className="bg-blue-500 text-white hover:bg-blue-700 py-1 px-3 rounded">
                        Editar
                      </button>
                      <button className="bg-red-500 text-white hover:bg-red-700 py-1 px-3 rounded">
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Cursos
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-left">Nome do Curso</th>
                  <th className="py-2 px-4 text-left">Descrição</th>
                  <th className="py-2 px-4 text-left">Tecnologias</th>
                  <th className="py-2 px-4 text-left">Dificuldade</th>
                  <th className="py-2 px-4 text-left">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">JavaScript</td>
                  <td className="py-2 px-4">
                    Um curso básico sobre JavaScript e suas funcionalidades.
                  </td>
                  <td className="py-2 px-4">JavaScript, Node.js</td>
                  <td className="py-2 px-4">Fácil</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2 justify-start">
                      <button className="bg-blue-500 text-white hover:bg-blue-700 py-1 px-3 rounded">
                        Editar
                      </button>
                      <button className="bg-red-500 text-white hover:bg-red-700 py-1 px-3 rounded">
                        Deletar
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Python</td>
                  <td className="py-2 px-4">
                    Curso de introdução ao Python com conceitos básicos e avançados.
                  </td>
                  <td className="py-2 px-4">Python, Django</td>
                  <td className="py-2 px-4">Média</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2 justify-start">
                      <button className="bg-blue-500 text-white hover:bg-blue-700 py-1 px-3 rounded">
                        Editar
                      </button>
                      <button className="bg-red-500 text-white hover:bg-red-700 py-1 px-3 rounded">
                        Deletar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;