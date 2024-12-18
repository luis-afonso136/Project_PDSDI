import { ReactNode } from "react";
import { createContext  } from "react";

interface ChildrenContext {
    children: ReactNode
}

export default ChildrenContext;

export type AuthDataContext = {
    // loading: boolean;
    signOut: () => void;
    signUp: (email: string, password: string) => Promise<void>;
    signIn: (email: string, password: string) => Promise<void>;
    passwordReset: (email: String) => Promise<void>;
    passwordUpdate: (newpassword: String) => Promise<void>;
}

export const AuthContext = createContext<AuthDataContext>(
    {} as AuthDataContext
)