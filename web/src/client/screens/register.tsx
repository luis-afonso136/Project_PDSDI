import React, { FormEvent, useState, useRef } from "react";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";
import { Eye, EyeClosed } from "lucide-react";
import { Mail, UserRound, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import logo from "../assets/LearnAcadamy3.png";
import computador from "../assets/negocio.jpg";
import gifBackground from "../assets/bJk.gif";
import { useAuth } from "../../hooks/useAuth";

export const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Referências para os campos
  const nomeRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { signUp } = useAuth();

  const navigate = useNavigate();


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nome = nomeRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    // Verifica se os campos estão preenchidos
    if (!nome || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await signUp({ nome, email, password });

      navigate("/cursosPage");
    } catch (error) {
      alert("Erro ao realizar cadastro. Tente novamente.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${gifBackground})` }}
    >
      <div className="absolute top-4 left-4">
        <Link to="/">
          <img src={logo} alt="Learn Academy Logo" className="h-36" />
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-2xl flex max-w-6xl h-[600px] overflow-hidden">
        <div className="hidden md:flex w-1/2 h-full">
          <img
            src={computador}
            alt="Programming Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-center">Register</h2>

          <form onSubmit={handleRegister}>
            <div className="mb-4 relative">
              <label htmlFor="nome" className="text-sm font-medium">
                Nome
              </label>
              <div className="relative">
                <UserRound
                  className="absolute left-3 top-7 transform -translate-y-1/2 text-gray-500"
                  size={20}
                />
                <input
                  type="text"
                  id="nome"
                  ref={nomeRef}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 mt-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>

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
                  ref={emailRef}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 mt-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
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
                  ref={passwordRef}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 mt-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
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

            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-800"
            >
              Sign up
            </button>
          </form>

          <div className="flex items-center mt-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">Or sign up with</span>
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
            <span className="text-gray-500">Already have an account? </span>
            <Link to="/login">
              <a className="text-purple-600 hover:underline">Sign in</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
