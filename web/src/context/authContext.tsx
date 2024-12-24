import { ReactNode } from "react";
import { createContext  } from "react";
import { Register } from "../DTO/userdto";

interface ChildrenContext {
    children: ReactNode
}

export default ChildrenContext;

export type AuthDataContext = {
    loading: boolean;
    isLoggedIn: boolean;
    signOut: () => void;
    signUp: (userData: Register) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    // passwordReset: (email: String) => Promise<void>;
    // passwordUpdate: (newpassword: String) => Promise<void>;
}

export const AuthContext = createContext<AuthDataContext>(
    {} as AuthDataContext
)