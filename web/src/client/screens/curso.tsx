import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Curso: React.FC = () => {
  const courses = [
    {
      id: 1,
      name: "React",
      status: "Concluído",
      icon: "https://img.icons8.com/color/200/react-native.png",
      description:
        "Aprenda a construir aplicações web modernas e interativas usando React.",
      tecnologias: [
        {
          nome: "JavaScript",
          imagem: "https://img.icons8.com/color/48/javascript.png",
        },
        {
          nome: "React",
          imagem: "https://img.icons8.com/color/48/react-native.png",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 pt-24">
      <Navbar />

      {courses.map((course) => (
        <div
          key={course.id}
          className="rounded-lg shadow-lg hover:shadow-xl transition duration-300 p-8 max-w-4xl w-full bg-white"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {course.name}
          </h2>

          {/* Imagem e Descrição */}
          <div className="flex gap-6 mb-8">
            <img
              src={course.icon}
              alt={course.name}
              className="w-48 h-48 object-contain"
            />
            <p className="text-lg text-gray-600">{course.description}</p>
          </div>

          {/* Tecnologias e Progresso */}
          <div className="flex justify-between items-center mb-6">
            {/* Tecnologias */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Tecnologias</h3>
              <div className="flex flex-wrap gap-4 mt-2">
                {course.tecnologias.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-sm font-medium shadow-md"
                    style={{
                      backgroundImage: `url(${tech.imagem})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                    }}
                  >
                    <span className="pl-12 items-start text-gray-800">
                      {tech.nome}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Progresso */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Progresso</h3>
              <div className="text-md text-gray-600 mt-2">
                <div
                  className={`px-6 py-2 rounded-full text-md font-medium ${
                    course.status === "Concluído"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {course.status}
                </div>
              </div>
            </div>
          </div>

          {/* Status e Botão */}
          <div className="flex justify-center items-center mt-6">
            <Link
              to={`/perguntas/${course.id}`}
              className="bg-purple-700 text-white px-8 py-3 text-md rounded-3xl hover:bg-purple-500 transition"
            >
              Acessar Curso
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Curso;
