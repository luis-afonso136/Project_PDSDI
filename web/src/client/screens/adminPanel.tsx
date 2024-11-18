import React from "react";
import Navbar from "../components/navbar";

const AdminPanel: React.FC = () => {
  const handleLogout = () => {
    alert("Logout efetuado!");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800 mt-20">
      <Navbar onLogout={handleLogout} />

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-8">Painel de Administração</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Total de Utilizadores</h2>
            <p className="text-gray-600 text-4xl font-bold">15</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Novos Utilizadores</h2>
            <p className="text-gray-600 text-4xl font-bold">5</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Utilizadores Online e Offline</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-green-500 mr-2"></span>
                <p className="text-green-600 text-lg">Online</p>
                <p className="text-gray-800 text-4xl font-bold ml-2">10</p>
              </div>
              <div className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
                <p className="text-red-600 text-lg">Offline</p>
                <p className="text-gray-800 text-4xl font-bold ml-2">5</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Usuários */}
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Lista de Usuários</h2>
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="py-2 px-4 text-left">Nome</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Tipo De Utilizador</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4">Luis Afonso</td>
                <td className="py-2 px-4">luis.manuel.afonso@ipvc.pt</td>
                <td className="py-2 px-4">Administrador</td>
                <td className="py-2 px-4 flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  <p className="text-green-600">Online</p>
                </td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2 justify-start">
                    <button className="bg-blue-500 text-white hover:bg-blue-700 py-1 px-3 rounded">Editar</button>
                    <button className="bg-red-500 text-white hover:bg-red-700 py-1 px-3 rounded">Eliminar</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
