import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { FaSignOutAlt } from 'react-icons/fa';

const SettingsPage: React.FC = () => {
  const [userName, setUserName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  const handleLogout = () => {
    alert('Logout efetuado!');
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-900">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Configurações</h1>
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg" // Substitua pelo URL do avatar
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div> {/* Indicador de online */}
            </div>
          </div>
        </header>

        <div className="p-10">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-6">Configurações</h1>

            {/* User Info Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">Informações de Conta</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium mb-2">Nome de Usuário</label>
                  <input
                    type="text"
                    id="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Nova Senha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <div>
              <button
                className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 flex items-center justify-center space-x-2"
                onClick={handleLogout}
              >
                <FaSignOutAlt />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
