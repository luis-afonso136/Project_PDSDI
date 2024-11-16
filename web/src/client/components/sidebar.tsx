import React from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaBook, FaCog, FaSignOutAlt } from 'react-icons/fa';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <aside className="w-64 min-h-screen p-5 flex flex-col justify-between bg-gray-900 text-white fixed left-0 top-0">
      <div>
        <h2 className="text-2xl font-bold mb-6">LEARN <span className="font-normal text-gray-400">ACADEMY</span></h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center py-2 px-4 rounded hover:bg-purple-600">
            <FaTachometerAlt className="mr-2" />
            Dashboard
          </Link>
          <Link to="/usuarios" className="flex items-center py-2 px-4 rounded hover:bg-purple-600">
            <FaUsers className="mr-2" />
            Utilizadores
          </Link>
          <Link to="/cursosPage" className="flex items-center py-2 px-4 rounded hover:bg-purple-600">
            <FaBook className="mr-2" />
            Cursos
          </Link>
          <Link to="/settingsPage" className="flex items-center py-2 px-4 rounded hover:bg-purple-600">
            <FaCog className="mr-2" />
            Configurações
          </Link>
           <button
            className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors px-20 py-2 rounded flex items-center justify-center space-x-2 mt-4"
            >
            <Link to="/" onClick={onLogout} className="flex items-center">
              <FaSignOutAlt />
              <span>Sair</span>
            </Link>
           </button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
