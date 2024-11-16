import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import { FaSearch, FaTrash, FaEdit } from 'react-icons/fa';

const CursosPage: React.FC = () => {
  const [filter, setFilter] = useState('all'); 
  
  const courses = [
    {
      title: 'HTML',
      description: 'Aprenda a construir páginas web com HTML',
      image: 'https://img.icons8.com/color/100/html-5.png',
      category: 'front-end',
    },
    {
      title: 'CSS',
      description: 'Aprimore as suas habilidades em estilização de páginas web com CSS',
      image: 'https://img.icons8.com/color/100/css3.png',
      category: 'front-end',
    },
    {
      title: 'TailwindCSS',
      description: 'Aprimore as suas habilidades no TailwindCSS',
      image: 'https://img.icons8.com/color/100/tailwindcss.png',
      category: 'front-end',
    },
    {
      title: 'React',
      description: 'Aprimore as suas habilidades no React',
      image: 'https://img.icons8.com/color/100/react-native.png',
      category: 'front-end',
    },
    {
      title: 'Vue.js',
      description: 'Aprimore suas habilidades no framework Vue.js',
      image: 'https://img.icons8.com/color/100/vue-js.png',
      category: 'front-end',
    },
    {
      title: 'Angular',
      description: 'Aprimore suas habilidades no Angular',
      image: 'https://img.icons8.com/color/100/angularjs.png',
      category: 'front-end',
    },

    {
      title: 'JavaScript',
      description: 'Aprimore as suas habilidades no JavaScript',
      image: 'https://img.icons8.com/color/100/javascript.png',
      category: 'programacao',
    },
    {
      title: 'Swift',
      description: 'Aprimore as suas habilidades no Swift',
      image: 'https://img.icons8.com/color/100/swift.png',
      category: 'programacao',
    },
    {
      title: 'PHP',
      description: 'Aprimore as suas habilidades no PHP',
      image: 'https://img.icons8.com/color/100/php.png',
      category: 'programacao',
    },
    {
      title: 'TypeScript',
      description: 'Aprimore as suas habilidades no TypeScript',
      image: 'https://img.icons8.com/color/100/typescript.png',
      category: 'programacao',
    },
    {
      title: 'Python',
      description: 'Aprimore as suas habilidades no Python',
      image: 'https://img.icons8.com/color/100/python.png',
      category: 'programacao',
    },
    {
      title: 'C',
      description: 'Aprenda a programar com a linguagem C',
      image: 'https://img.icons8.com/color/100/c-programming.png',
      category: 'programacao',
    },
    {
      title: 'C++',
      description: 'Aprimore as suas habilidades em programação com C++',
      image: 'https://img.icons8.com/color/100/c-plus-plus-logo.png',
      category: 'programacao',
    },
    {
      title: 'C#',
      description: 'Aprimore as suas habilidades no C#',
      image: 'https://img.icons8.com/color/100/c-sharp-logo.png',
      category: 'programacao',
    },

    {
      title: 'Unity',
      description: 'Desenvolva jogos com Unity utilizando C#',
      image: 'https://img.icons8.com/color/100/unity.png',
      category: 'jogos',
    },
    {
      title: 'Unreal Engine',
      description: 'Desenvolva jogos com Unreal Engine utilizando C++',
      image: 'https://img.icons8.com/color/100/unreal-engine.png',
      category: 'jogos',
    },
  ];

  const filteredCourses = filter === 'all' ? courses : courses.filter(course => course.category === filter);

  const handleLogout = () => {
    alert('Logout efetuado!');
  };

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <Sidebar onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Cursos</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700">
              Criar Curso
            </button>
            {/* Avatar */}
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Avatar"
                className="w-10 h-10 rounded-full border-2 border-gray-300"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </header>

        <div className="p-10">
          {/* Search and Filters */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center bg-white p-2 rounded shadow w-1/2">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 border-none outline-none px-2"
              />
              <FaSearch className="text-gray-500" />
            </div>
            <select
              className="bg-white p-2 rounded shadow"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">Todos</option>
              <option value="front-end">Front-End</option>
              <option value="programacao">Programação</option>
              <option value="jogos">Jogos</option>
            </select>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <img src={course.image} alt={course.title} className="mx-auto mb-4 w-24 h-24" />
                <h3 className="text-xl font-bold">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
                    Começa Agora
                  </button>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-gray-900">
                      <FaEdit />
                    </button>
                    <button className="text-gray-500 hover:text-red-600">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosPage;
