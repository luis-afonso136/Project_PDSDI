import { api } from "../axios/axios";
import ChildrenContext, { AuthContext } from "../context/authContext";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { registerSchema, Register } from "../DTO/userdto";  

export function AuthProvider({ children }: ChildrenContext) {
  useEffect(() => {
    return () => {};
  }, []);

  const signUp = async (userData: Register) => {
    try {
      // Validação dos dados usando o schema
      const { nome, email, password } = userData;

      // Requisição para o endpoint de registro
      const response = await api.post("/register", {
        nome,
        email,
        password,
      });

      // Sucesso: Adicionar lógica ou feedback ao usuário
      toast.success("Cadastro realizado com sucesso!");
    } catch (error: any) {
      //   Tratamento de erro
      toast.error(
        error.response?.data?.message || "Erro ao realizar cadastro!"
      );
    }
  };

  // function signOut = async () => {
  //     try {

  //     } catch (error) {

  //     }
  // }
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
}
