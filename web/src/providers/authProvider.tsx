import { api } from "../axios/axios";
import ChildrenContext, { AuthContext } from "../context/authContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { registerSchema, Register } from "../DTO/userdto";

export function AuthProvider({ children }: ChildrenContext) {
  useEffect(() => {
    return () => {};
  }, []);

  // Função para registrar o usuário
  const signUp = async (userData: Register) => {
    try {
      const { nome, email, password } = userData;

      const response = await api.post("/register", {
        nome,
        email,
        password,
      });

      toast.success("Registro realizado com sucesso!");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Erro ao realizar cadastro!"
      );
    }
  };

  interface AuthResponse {
    token: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  }
  
  // Função de login
  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>("/login", { email, password });
      const { token, user } = response.data;

      if (token && user) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login realizado com sucesso!");
      } else {
        toast.error("Falha na autenticação: dados ausentes.");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Erro ao realizar login!"
      );
    }
  };

  const signOut = () => {
    try {
      // Remover o token e os dados do usuário do localStorage
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
  
      // Salvar uma mensagem de feedback no localStorage
      toast.success("LogOut realizado com sucesso!");
  
      // Redirecionar para a página de login
      window.location.href = "/login";
    } catch (error) {
      toast.error("Erro ao realizar logout!");
    }
  };  

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
