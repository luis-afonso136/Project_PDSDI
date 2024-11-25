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

      <div className="pt-20 px-6 flex gap-6 mt-14">
        <div className="w-1/4 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Opções</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <FaUser className="text-xl" />
              <span>Nome</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <FaEnvelope className="text-xl" />
              <span>E-mail</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <FaLock className="text-xl" />
              <span>Password</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <FaGlobe className="text-xl" />
              <span>País</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-700 hover:text-purple-600 cursor-pointer">
              <FaPhone className="text-xl" />
              <span>Nº de Telemóvel</span>
            </li>
          </ul>
        </div>

        <div className="w-3/4 grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Nome</h3>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">E-mail</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">País</h3>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Nº de Telemóvel</h3>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
