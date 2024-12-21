import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaUser, FaEnvelope, FaLock, FaGlobe, FaSave, FaCamera } from "react-icons/fa";

const SettingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "João Silva",
    email: "joao.silva@email.com",
    password: "",
    country: "Portugal",
    userType: "Aluno",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert("Configurações salvas com sucesso!");
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800">
      <Navbar  />

      <div className="pt-24 px-6 md:px-12 max-w-6xl mx-auto pb-10">
        <h1 className="text-3xl font-bold text-gray-700 mb-8">Configurações de Conta</h1>

        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-8 gap-8">
          {/* Coluna Esquerda */}
          <div className="md:w-1/3 text-center space-y-6">
            <div className="relative inline-block">
              <img
                src="https://via.placeholder.com/150"
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full mx-auto shadow-md"
              />
              <label
                htmlFor="profilePicture"
                className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full p-2 shadow cursor-pointer"
              >
                <FaCamera />
              </label>
              <input
                type="file"
                id="profilePicture"
                className="hidden"
                onChange={() => alert("Foto alterada!")}
              />
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-700">{formData.userName}</p>
              <p className="text-sm text-gray-500"><span className="font-bold">Email:</span> {formData.email}</p>
              <p className="text-sm text-gray-500"><span className="font-bold">País:</span> {formData.country}</p>
              <p className="text-sm text-gray-500"><span className="font-bold">Tipo de Utilizador:</span> {formData.userType}</p>
            </div>
          </div>

          {/* Coluna Direita */}
          <div className="md:w-2/3 space-y-6">
            {/* Nome */}
            <div className="relative">
              <label htmlFor="userName" className="text-sm font-medium text-gray-500">
                Nome
              </label>
              <div className="flex items-center mt-2 relative">
                <FaUser className="absolute left-4 text-gray-400" />
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="pl-12 p-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* E-mail */}
            <div className="relative">
              <label htmlFor="email" className="text-sm font-medium text-gray-500">
                Email
              </label>
              <div className="flex items-center mt-2 relative">
                <FaEnvelope className="absolute left-4 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  className="pl-12 p-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Senha */}
            <div className="relative">
              <label htmlFor="password" className="text-sm font-medium text-gray-500">
                Senha
              </label>
              <div className="flex items-center mt-2 relative">
                <FaLock className="absolute left-4 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  className="pl-12 p-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* País */}
            <div className="relative">
              <label htmlFor="country" className="text-sm font-medium text-gray-500">
                País
              </label>
              <div className="flex items-center mt-2 relative">
                <FaGlobe className="absolute left-4 text-gray-400" />
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Digite seu país"
                  className="pl-12 p-4 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Tipo de Utilizador */}
            <div className="relative">
              <label htmlFor="userType" className="text-sm font-medium text-gray-500">
                Tipo de Utilizador
              </label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-4"
              >
                <option value="Aluno">Aluno</option>
                <option value="Professor">Professor</option>
              </select>
            </div>

            {/* Botão de Salvar */}
            <div className="text-right">
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all"
              >
                <FaSave />
                Salvar Configurações
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
