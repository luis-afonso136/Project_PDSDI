import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaSearch, FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CursosPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para abrir/fechar o modal
  const [newCourse, setNewCourse] = useState({
    title: "",
    level: "",
    skills: [] as string[],
  });

  const navigate = useNavigate();

  const handleCardClick = (title: string) => {
    navigate(`/curso/${title.toLowerCase()}`);
  };

  const technologies = [
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/100/javascript.png",
    },
    { name: "PHP", icon: "https://img.icons8.com/color/100/php.png" },
    { name: "NodeJS", icon: "https://img.icons8.com/color/100/nodejs.png" },
    {
      name: "ReactJS",
      icon: "https://img.icons8.com/color/100/react-native.png",
    },
    { name: "C#", icon: "https://img.icons8.com/color/100/c-sharp-logo.png" },
    { name: "Python", icon: "https://img.icons8.com/color/100/python.png" },
    { name: "HTML", icon: "https://img.icons8.com/color/100/html-5.png" },
    { name: "CSS", icon: "https://img.icons8.com/color/100/css3.png" },
    {
      name: "Tailwind",
      icon: "https://img.icons8.com/color/100/tailwindcss.png",
    },
    { name: "Swift", icon: "https://img.icons8.com/color/100/swift.png" },
  ];

  const courses = [
    {
      title: "ReactJS",
      level: "Intermediário",
      skills: ["ReactJS", "JavaScript"],
    },
    {
      title: "JavaScript",
      level: "Intermediário",
      skills: ["JavaScript"],
    },
  
  ];

  const handleTechnologyClick = (tech: string) => {
    setFilter(tech);
  };

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = filter === "all" || course.skills.includes(filter);
    const matchesSearch =
      searchTerm === "" ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getSkillIcon = (skill: string) => {
    switch (skill) {
      case "ReactJS":
        return "https://img.icons8.com/color/20/react-native.png";
      
      case "JavaScript":
        return "https://img.icons8.com/color/20/javascript.png";
      
    }
  };

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para lidar com o envio do formulário de novo curso
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para salvar o curso, enviar para a API, etc.
    console.log("Novo curso:", newCourse);
    setIsModalOpen(false); // Fechar o modal após o envio
  };

  return (
    <div className="bg-gray-100 min-h-screen mt-5 pb-10">
      <Navbar />

      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
            <div className="flex items-center bg-white p-2 rounded shadow w-full md:w-1/2">
              <input
                type="text"
                placeholder="Pesquisar cursos..."
                className="flex-1 border-none outline-none px-2 text-gray-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="text-gray-500" />
            </div>

            <div className="flex justify-end mb-4">
              <button
                className="bg-purple-700 text-white px-4 py-2 rounded shadow hover:bg-purple-500"
                onClick={openModal} // Abrir o modal ao clicar
              >
                Adicionar Curso
              </button>
            </div>

            <select
              className="bg-white p-2 rounded shadow w-full md:w-auto text-gray-600"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">Todos</option>
              {technologies.map((tech) => (
                <option key={tech.name} value={tech.name}>
                  {tech.name}
                </option>
              ))}
            </select>
          </div>
          <div className="text-xl font-semibold text-gray-800 mb-4">
            Tecnologias
          </div>
          <div className="flex space-x-4 mb-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition cursor-pointer"
                onClick={() => handleTechnologyClick(tech.name)}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-2 transition-all duration-300 hover:opacity-80"
                />
                <span className="text-sm text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold text-gray-800 mb-4">Cursos</div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredCourses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full relative hover:scale-105 transition-all cursor-pointer"
          onClick={() => handleCardClick(course.title)}
        >
          <div className="absolute top-4 left-4 text-purple-200 text-7xl opacity-10">
            <FaBook />
          </div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-800">{course.title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{course.level}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {course.skills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full flex items-center"
              >
                <img
                  src={getSkillIcon(skill)}
                  alt={skill}
                  className="mr-1"
                />
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Adicionar Novo Curso
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Título do Curso
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={newCourse.title}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Nível
                </label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={newCourse.level}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, level: e.target.value })
                  }
                  required
                >
                  <option value="">Selecione o nível</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Tecnologias
                </label>
                <select
                  multiple
                  className="w-full p-2 border border-gray-300 rounded"
                  value={newCourse.skills}
                  onChange={(e) =>
                    setNewCourse({
                      ...newCourse,
                      skills: Array.from(
                        e.target.selectedOptions,
                        (option) => option.value
                      ),
                    })
                  }
                  required
                >
                  {technologies.map((tech, index) => (
                    <option key={index} value={tech.name}>
                      {tech.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  onClick={closeModal} // Fechar o modal
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-500"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CursosPage;
