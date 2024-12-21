import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import { FaCog } from "react-icons/fa";

export const ProfilePage: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: "React",
      status: "Concluido",
      icon: "https://img.icons8.com/color/100/react-native.png",
    },
    {
      id: 2,
      name: "JavaScript",
      status: "Em Andamento",
      icon: "https://img.icons8.com/color/100/javascript.png",
    },
    {
      id: 3,
      name: "TailwindCSS",
      status: "Em Andamento",
      icon: "https://img.icons8.com/color/100/tailwindcss.png",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-28">
      <Navbar />
      <div className="w-full max-w-5xl bg-gray-50 shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start relative">
        <img
          src="https://img.icons8.com/color/200/user.png"
          alt="Foto de Perfil"
          className="w-32 h-32 rounded-full border-4 border-purple-600"
        />
        <div className="mt-4 md:mt-0 md:ml-6">
          <h1 className="text-2xl font-bold">Luís Afonso</h1>
          <p className="text-gray-500 mt-1">Portugal</p>
          <div className="flex items-center mt-2">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <p className="text-green-600 font-semibold">Online</p>
          </div>
        </div>
        <Link
          to="/settingsPage"
          className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full focus:outline-none shadow-md transition-all duration-200"
          aria-label="Configurações"
        >
          <FaCog className="text-white text-lg" />
        </Link>
      </div>

      <div className="w-full max-w-5xl mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 shadow-md rounded-lg p-6">
          <h2 className="text-lg font-bold mb-4">Progresso dos Cursos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course) => (
              <button
                key={course.id}
                className="flex items-center bg-white shadow rounded-lg p-4 space-x-4 w-full hover:bg-purple-100 transition-all"
                onClick={() =>
                  alert(`Redirecionando para o curso: ${course.name}`)
                }
              >
                <img
                  src={course.icon}
                  alt={course.name}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-md font-bold">{course.name}</h3>
                  <p className="text-sm text-gray-500">{course.status}</p>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              to="/cursosPage"
              className="px-40 py-2 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
            >
              Pesquisar Cursos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
