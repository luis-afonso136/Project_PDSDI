import { createContext } from "react";

export type User = {
  id_utilizador: number;
  nome?: string;
  email?: string;
  password?: string;
  country?: string;
  avatar?: string;
};

export type UserContextData = {
  loading: boolean;
  updateUser: (id_utilizador: number, userData: Partial<User>) => Promise<void>;
  deleteUser: (id_utilizador: number) => Promise<void>;
};

export const UserContext = createContext<UserContextData>({} as UserContextData);

