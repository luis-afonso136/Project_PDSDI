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
  
  const signIn = async (email: string, password: string) => {
    try {
      // Enviando os dados de login para o servidor
      const response = await api.post<AuthResponse>("/login", { email, password });
  
      // A resposta contém token e user
      const { token, user } = response.data;
  
      // Verificando se o token e o user existem
      if (token && user) {
        // Armazenando o token no localStorage
        localStorage.setItem("authToken", token);
  
        // Armazenando os dados do usuário no localStorage (em formato JSON)
        localStorage.setItem("user", JSON.stringify(user));
  
        // Sucesso: Mensagem para o usuário
        toast.success("Login realizado com sucesso!");
  
        // Aqui você pode redirecionar o usuário ou atualizar o estado global
      } else {
        toast.error("Falha na autenticação: dados ausentes.");
      }
    } catch (error: any) {
      // Tratamento de erro caso a requisição falhe
      toast.error(
        error.response?.data?.message || "Erro ao realizar login!"
      );
    }
  };
  

  return (
    <AuthContext.Provider value={{ signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
