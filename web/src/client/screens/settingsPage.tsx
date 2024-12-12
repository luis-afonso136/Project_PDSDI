import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaPhone, FaSave } from "react-icons/fa";

const SettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    country: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Configurações salvas com sucesso!");
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar onLogout={() => alert("Logout efetuado!")} />

      <div className="pt-24 px-6 md:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Configurações de Conta</h1>

        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          {/* Nome */}
          <div className="relative">
            <label htmlFor="userName" className="text-sm font-medium text-gray-500">
              Nome
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="Digite seu nome"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 pl-12"
            />
            <FaUser className="absolute left-4 top-10 text-gray-400" />
          </div>

          {/* E-mail */}
          <div className="relative">
            <label htmlFor="email" className="text-sm font-medium text-gray-500">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 pl-12"
            />
            <FaEnvelope className="absolute left-4 top-10 text-gray-400" />
          </div>

          {/* Senha */}
          <div className="relative">
            <label htmlFor="password" className="text-sm font-medium text-gray-500">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Digite sua senha"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 pl-12"
            />
            <FaLock className="absolute left-4 top-10 text-gray-400" />
          </div>

          {/* País */}
          <div className="relative">
            <label htmlFor="country" className="text-sm font-medium text-gray-500">
              País
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Digite seu país"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 pl-12"
            />
            <FaGlobe className="absolute left-4 top-10 text-gray-400" />
          </div>

          {/* Telefone */}
          <div className="relative">
            <label htmlFor="phone" className="text-sm font-medium text-gray-500">
              Telefone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Digite seu número de telefone"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4 pl-12"
            />
            <FaPhone className="absolute left-4 top-10 text-gray-400" />
          </div>

          {/* Botão de Salvar */}
          <div className="text-right">
            <button
              onClick={handleSave}
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
            >
              <FaSave />
              Salvar Configurações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
