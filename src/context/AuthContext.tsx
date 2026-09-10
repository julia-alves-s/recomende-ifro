"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Usuario {
    id: string;
    nome: string;
    usuario: string;
}

interface AuthContextType {
    usuario: Usuario | null;
    setUsuario: (u: Usuario | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const CHAVE_STORAGE = "usuario-logado";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [usuario, setUsuarioState] = useState<Usuario | null>(null);

    useEffect(() => {
        const salvo = sessionStorage.getItem(CHAVE_STORAGE);
        if (salvo) {
            try {
                setUsuarioState(JSON.parse(salvo));
            } catch {
                sessionStorage.removeItem(CHAVE_STORAGE);
            }
        }
    }, []);

    function setUsuario(u: Usuario | null) {
        setUsuarioState(u);
        if (u) {
            sessionStorage.setItem(CHAVE_STORAGE, JSON.stringify(u));
        } else {
            sessionStorage.removeItem(CHAVE_STORAGE);
        }
    }

    return (
        <AuthContext.Provider value={{ usuario, setUsuario }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth precisa estar dentro de AuthProvider");
    return ctx;
}