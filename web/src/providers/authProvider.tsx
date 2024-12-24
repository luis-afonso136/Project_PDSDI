import { api } from "../axios/axios";
import ChildrenContext, { AuthContext } from "../context/authContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Register } from "../DTO/userdto";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export function AuthProvider({ children }: ChildrenContext) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = () => {
      try {
        const token = Cookies.get("token"); // Nome do cookie com o token

        if (!token) {
          setIsLoggedIn(false);
          setLoading(false);
          return;
        }

        const decoded = jwtDecode(token);

        console.log("decoded token: " + JSON.stringify(decoded));
        console.log("decoded token: " + JSON.stringify(decoded.sub));

        if (decoded.sub) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }

        setLoading(false); // Desativar o indicador de carregamento após verificar o login
      } catch (error) {
        console.error("Erro ao verificar login:", error);
        setIsLoggedIn(false);
        setLoading(false); // Desativar o indicador de carregamento em caso de erro
      }
    };

    checkLogin();
  }, []);

  const signUp = async (userData: Register) => {
    setLoading(true); // Ativar o indicador de carregamento antes de fazer a chamada
    try {
      const { nome, email, password } = userData;
      await api.post("/register", {
        nome,
        email,
        password,
      });
      toast.success("Registro realizado com sucesso!");
    } catch (error) {
      toast.error("Erro ao realizar cadastro!" + error);
    } finally {
      setLoading(false); // Desativar o indicador de carregamento após a operação
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true); // Ativar o indicador de carregamento antes de fazer a chamada
    try {
      await api.post("/login", {
        email,
        password,
      });
      toast.success("Login realizado com sucesso!");
      setIsLoggedIn(true); // Atualizar o estado de login após sucesso
    } catch (error) {
      console.log("Error: " + error);
      toast.error("Erro ao realizar login!");
    } finally {
      setLoading(false); // Desativar o indicador de carregamento após a operação
    }
  };

  const signOut = () => {
    try {
      // Remover o cookie de autenticação (substitua 'authToken' pelo nome do cookie que está sendo usado)
      Cookies.remove('token');
  
      // Salvar uma mensagem de feedback no localStorage
      toast.success("LogOut realizado com sucesso!");
  
      // // Redirecionar para a página de login
      window.location.href = "/login";
    } catch (error) {
      toast.error("Erro ao realizar logout!" + error);
    }
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, isLoggedIn, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
