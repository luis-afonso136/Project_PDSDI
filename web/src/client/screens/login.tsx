import React from 'react';
import logo from '../assets/LearnAcadamy3.png'; 

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
      {/* Container principal */}
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl">
        
        {/* Seção de Login */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            {/* Logotipo */}
            <img src={logo} alt="Learn Academy Logo" className="h-12" />
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          
          {/* Formulário de Login */}
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example.email@gmail.com"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter at least 8+ characters"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
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

          {/* Botões de redes sociais */}
          <div className="flex justify-center space-x-4 mt-4">
            <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-2">
              G {/* Ícone do Google */}
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2">
              F {/* Ícone do Facebook */}
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white rounded-full p-2">
              A {/* Ícone da Apple */}
            </button>
          </div>

          {/* Link para criar conta */}
          <div className="text-center mt-4">
            <span className="text-gray-500">Don't have an account? </span>
            <a href="#" className="text-purple-600 hover:underline">Sign up</a>
          </div>
        </div>

        {/* Seção de imagem à direita */}
        <div className="hidden md:flex w-1/2 bg-blue-800 rounded-r-lg items-center justify-center">
          <img src="/path/to/illustration-image.png" alt="Programming Illustration" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Login;
