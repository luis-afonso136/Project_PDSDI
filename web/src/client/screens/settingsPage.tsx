import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaPhone } from "react-icons/fa";

const SettingsPage: React.FC = () => {
  const [userName, setUserName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogout = () => {
    alert("Logout efetuado!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar onLogout={handleLogout} />

      <div className="pt-24 px-8 max-w-screen-xl mx-auto">
        <div className="flex gap-10 mt-12">
          {/* Menu de Opções */}
          <div className="w-1/4 bg-white shadow-lg rounded-xl p-6 space-y-8">
            <h2 className="text-2xl font-semibold text-gray-800">Opções</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <FaUser className="text-xl" />
                <span>Nome</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <FaEnvelope className="text-xl" />
                <span>E-mail</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <FaLock className="text-xl" />
                <span>Password</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <FaGlobe className="text-xl" />
                <span>País</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300">
                <FaPhone className="text-xl" />
                <span>Nº de Telemóvel</span>
              </li>
            </ul>
          </div>

          {/* Formulário de Configurações */}
          <div className="w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Nome</h3>
              <div className="relative">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  placeholder="Digite seu nome"
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">E-mail</h3>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  placeholder="Digite seu e-mail"
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Password</h3>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  placeholder="Digite sua senha"
                />
                <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">País</h3>
              <div className="relative">
                <input
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  placeholder="Digite seu país"
                />
                <FaGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Nº de Telemóvel</h3>
              <div className="relative">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300"
                  placeholder="Digite seu número"
                />
                <FaPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
