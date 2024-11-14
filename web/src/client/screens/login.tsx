import React, { useState } from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { Eye, EyeClosed } from 'lucide-react';
import logo from '../assets/LearnAcadamy3.png';
import computador from '../assets/negocio.jpg';
import gifBackground from '../assets/bJk.gif';

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${gifBackground})` }}
    >
      {/* Logotipo no canto superior esquerdo */}
      <div className="absolute top-4 left-4">
        <img src={logo} alt="Learn Academy Logo" className="h-36" />
      </div>

      {/* Container principal */}
      <div className="bg-white shadow-lg rounded-2xl flex max-w-6xl h-[600px] overflow-hidden">
        
        {/* Seção de Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          
          {/* Formulário de Login */}
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Type your password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800">
              Sign in
            </button>
          </form>

          {/* Linha divisória */}
          <div className="flex items-center mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or sign in with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Botões de redes sociais com ícones */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2">
              <FaGoogle size={20} />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2">
              <FaFacebookF size={20} />
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2">
              <FaApple size={20} />
            </button>
          </div>

          {/* Link para criar conta */}
          <div className="text-center mt-4">
            <span className="text-gray-500">Don't have an account? </span>
            <a href="#" className="text-purple-600 hover:underline">Sign up</a>
          </div>
        </div>

        {/* Seção de imagem à direita */}
        <div className="hidden md:flex w-1/2 h-full">
          <img src={computador} alt="Programming Illustration" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Login;
