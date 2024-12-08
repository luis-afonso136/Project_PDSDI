import React, { useState } from "react";
import Navbar from "../components/navbar";
import { FaSearch, FaBook } from "react-icons/fa";

const CursosPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      hours: "50h",
      level: "Intermediário",
      skills: ["ReactJS", "JavaScript"],
    },
    {
      title: "Full-Stack",
      hours: "100h",
      level: "Iniciante",
      skills: ["JavaScript", "NodeJS"],
    },
    {
      title: "Python Básico",
      hours: "40h",
      level: "Iniciante",
      skills: ["Python"],
    },
    { title: "C# Avançado", hours: "60h", level: "Avançado", skills: ["C#"] },
    { title: "PHP Básico", hours: "30h", level: "Iniciante", skills: ["PHP"] },
    {
      title: "JavaScript Intermediário",
      hours: "45h",
      level: "Intermediário",
      skills: ["JavaScript"],
    },
    {
      title: "Frontend",
      hours: "120h",
      level: "Intermediário",
      skills: ["ReactJS", "JavaScript", "HTML", "CSS", "Tailwind"],
    },
    {
      title: "Backend",
      hours: "120h",
      level: "Avançado",
      skills: ["NodeJS", "PHP", "C#", "Python"],
    },
    { title: "Swift", hours: "80h", level: "Intermediário", skills: ["Swift"] },
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
      case "C#":
        return "https://img.icons8.com/color/20/c-sharp-logo.png";
      case "JavaScript":
        return "https://img.icons8.com/color/20/javascript.png";
      case "PHP":
        return "https://img.icons8.com/color/20/php.png";
      case "NodeJS":
        return "https://img.icons8.com/color/20/nodejs.png";
      case "Python":
        return "https://img.icons8.com/color/20/python.png";
      case "HTML":
        return "https://img.icons8.com/color/20/html-5.png";
      case "CSS":
        return "https://img.icons8.com/color/20/css3.png";
      case "Tailwind":
        return "https://img.icons8.com/color/20/tailwindcss.png";
      case "Swift":
        return "https://img.icons8.com/color/20/swift.png";
      default:
        return "https://img.icons8.com/ios-filled/20/gray/question-mark.png";
    }
  };

  return (
    <div className="bg-white min-h-screen mt-5">
      <Navbar onLogout={() => alert("Logout efetuado!")} />

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
          <div className="flex space-x-4 mb-8 ">
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col h-full relative hover:scale-105 transition-all cursor-pointer"
            >
              <div className="absolute top-4 left-4 text-purple-200 text-7xl opacity-10">
                <FaBook />
              </div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">
                  {course.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {course.hours} - {course.level}
              </p>
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
    </div>
  );
};

export default CursosPage;
