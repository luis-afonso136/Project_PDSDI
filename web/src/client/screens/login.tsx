import React, { useState, useContext } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Eye, EyeClosed } from "lucide-react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/LearnAcadamy3.png";
import computador from "../assets/negocio.jpg";
import gifBackground from "../assets/bJk.gif";
import { AuthContext } from "../../context/authContext"; 

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");  // Estado para email
  const [password, setPassword] = useState("");  // Estado para senha
  const { signIn } = useContext(AuthContext);  // Função signIn do contexto de autenticação
  const navigate = useNavigate();  // Hook de navegação para redirecionamento após login

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Chamando a função signIn com os dados do formulário
      await signIn(email, password);
      
      // Redirecionando o usuário para a página desejada após login
      navigate("/cursosPage");  // Altere para a página que você deseja redirecionar após o login
    } catch (error) {
      // Lógica de erro se o login falhar
      console.error("Falha no login", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-900 bg-cover bg-center flex items-center justify-center relative"
    >
      <div className="absolute top-4 left-4">
        <Link to="/">
          <img src={logo} alt="Learn Academy Logo" className="h-36" />
        </Link>
      </div>
      <div className="bg-white shadow-lg rounded-2xl flex max-w-6xl h-[600px] overflow-hidden">
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4 relative">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}  // Atualizando o valor do email
                  className="w-full px-4 py-2 mt-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Type your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}  
                  className="w-full px-4 py-2 mt-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-7 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeClosed size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-purple-600"
                />
                <span className="ml-2 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or sign in with</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full px-10 p-2">
              <FaGoogle size={20} />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-10 p-2">
              <FaFacebookF size={20} />
            </button>
            <button className="border-2 border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-10 p-2">
              <FaApple size={20} />
            </button>
          </div>
          <div className="text-center mt-4">
            <span className="text-gray-500">Don't have an account? </span>
            <Link to="/register">
              <span className="text-purple-600 hover:underline">Sign up</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex w-1/2 h-full">
          <img
            src={computador}
            alt="Programming Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
