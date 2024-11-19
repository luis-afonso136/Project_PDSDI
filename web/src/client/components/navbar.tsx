import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaCog, FaSignOutAlt, FaUser, FaDesktop } from "react-icons/fa";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h2 className="text-2xl font-bold">
          LEARN <span className="font-normal text-gray-400">ACADEMY</span>
        </h2>

        <nav className="flex items-center space-x-6">
          <Link to="/cursosPage" className="relative group">
            <div className="flex items-center hover:text-purple-400">
              <FaBook className="mr-2" />
              Cursos
            </div>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <div className="relative group">
            <div className="flex items-center">
              <img
                src="https://img.icons8.com/color/48/user.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-purple-600 cursor-pointer"
              />
            </div>

            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-4 transition-all duration-300 ease-in-out">
              <ul>
                <li>
                  <Link
                    to="/profilePage"
                    className="flex items-center px-4 py-2 hover:bg-gray-200"
                  >
                    <FaUser className="mr-2 text-gray-600" />
                    Perfil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settingsPage"
                    className="flex items-center px-4 py-2 hover:bg-gray-200"
                  >
                    <FaCog className="mr-2 text-gray-600" />
                    Configurações
                  </Link>
                </li>
                <li>
                  <Link
                    to="/adminPanel"
                    className="flex items-center px-4 py-2 hover:bg-gray-200"
                  >
                    <FaDesktop className="mr-2 text-gray-600" />
                    Admin Panel
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={onLogout}
                    className="flex items-center w-full text-left px-4 py-2 hover:bg-gray-200 text-red-500"
                  >
                    <FaSignOutAlt className="mr-2 text-red-500" />
                    Sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
