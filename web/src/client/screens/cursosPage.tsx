import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaSearch, FaTrash, FaEdit } from "react-icons/fa";

const CursosPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      title: "HTML",
      description: "Aprenda a construir páginas web com HTML",
      image: "https://img.icons8.com/color/100/html-5.png",
      category: "front-end",
    },
    {
      title: "CSS",
      description:
        "Aprimore as suas habilidades em estilização de páginas web com CSS",
      image: "https://img.icons8.com/color/100/css3.png",
      category: "front-end",
    },
    {
      title: "TailwindCSS",
      description: "Aprimore as suas habilidades no TailwindCSS",
      image: "https://img.icons8.com/color/100/tailwindcss.png",
      category: "front-end",
    },
    {
      title: "React",
      description: "Aprimore as suas habilidades no React",
      image: "https://img.icons8.com/color/100/react-native.png",
      category: "front-end",
    },
    {
      title: "JavaScript",
      description: "Aprimore as suas habilidades no JavaScript",
      image: "https://img.icons8.com/color/100/javascript.png",
      category: "programacao",
    },
    {
      title: "Swift",
      description: "Aprimore as suas habilidades no Swift",
      image: "https://img.icons8.com/color/100/swift.png",
      category: "programacao",
    },
    {
      title: "TypeScript",
      description: "Aprimore as suas habilidades no TypeScript",
      image: "https://img.icons8.com/color/100/typescript.png",
      category: "programacao",
    },
    {
      title: "Python",
      description: "Aprimore as suas habilidades no Python",
      image: "https://img.icons8.com/color/100/python.png",
      category: "programacao",
    },
    {
      title: "C",
      description: "Aprenda a programar com a linguagem C",
      image: "https://img.icons8.com/color/100/c-programming.png",
      category: "programacao",
    },
    {
      title: "C++",
      description: "Aprimore as suas habilidades em programação com C++",
      image: "https://img.icons8.com/color/100/c-plus-plus-logo.png",
      category: "programacao",
    },
    {
      title: "C#",
      description: "Aprimore as suas habilidades no C#",
      image: "https://img.icons8.com/color/100/c-sharp-logo.png",
      category: "programacao",
    },
    {
      title: "Unity",
      description: "Desenvolva jogos com Unity utilizando C#",
      image: "https://img.icons8.com/color/100/unity.png",
      category: "jogos",
    },
    {
      title: "Unreal Engine",
      description: "Desenvolva jogos com Unreal Engine utilizando C++",
      image: "https://img.icons8.com/color/100/unreal-engine.png",
      category: "jogos",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = filter === "all" || course.category === filter;
    const matchesSearch =
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLogout = () => {
    alert("Logout efetuado!");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar onLogout={handleLogout} />

      <div className="pt-20 px-6 mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center bg-white p-2 rounded shadow w-full md:w-1/2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 border-none outline-none px-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="text-gray-500" />
            </div>

            <select
              className="bg-white p-2 rounded shadow w-full md:w-auto"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">Todos</option>
              <option value="front-end">Front-End</option>
              <option value="programacao">Programação</option>
              <option value="jogos">Jogos</option>
            </select>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
            >
              <img
                src={course.image}
                alt={course.title}
                className="mb-4 w-24 h-24 object-contain"
              />
              <h3 className="text-xl font-bold text-center">{course.title}</h3>
              <p className="text-gray-600 mb-4 text-center">
                {course.description}
              </p>

              <div className="mt-auto w-full flex justify-between items-center">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 hover:scale-105 transition duration-300">
                  Começa Agora
                </button>

                <div className="flex space-x-2">
                  <button className="text-gray-500 hover:text-gray-900 transition duration-200">
                    <FaEdit />
                  </button>
                  <button className="text-gray-500 hover:text-red-600 transition duration-200">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CursosPage;
