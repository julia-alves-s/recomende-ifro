"use client";

import { useState } from "react";
import { useAuth } from "../src/context/AuthContext";

interface CadastroFormProps {
    onSuccess?: () => void;
}

export default function CadastroForm({ onSuccess }: CadastroFormProps) {
    const { setUsuario } = useAuth();

    const [nome, setNome] = useState("");
    const [usuarioInput, setUsuarioInput] = useState("");
    const [senha, setSenha] = useState("");

    const [enviando, setEnviando] = useState(false);
    const [erroEnvio, setErroEnvio] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErroEnvio(null);
        setEnviando(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/usuarios`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ nome, usuario: usuarioInput, senha }),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                setErroEnvio(data?.error ?? data?.mensagem ?? "Erro ao cadastrar usuário.");
                return;
            }

            // Cadastro já loga automaticamente (usuarioService.criar chama login por baixo)
            const dadosUsuario = data.dados ?? data.data ?? data;
            setUsuario({
                id: dadosUsuario.id,
                nome: dadosUsuario.nome,
                usuario: dadosUsuario.usuario,
            });

            onSuccess?.();
        } catch (err) {
            console.error("Erro inesperado ao cadastrar:", err);
            setErroEnvio("Erro inesperado ao cadastrar.");
        } finally {
            setEnviando(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold uppercase">Cadastro</h2>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Nome</label>
                <input
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                    className="border p-2 bg-transparent rounded-xl"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Usuário</label>
                <input
                    value={usuarioInput}
                    onChange={(e) => setUsuarioInput(e.target.value)}
                    required
                    className="border p-2 bg-transparent rounded-xl"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Senha</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="border p-2 bg-transparent rounded-xl"
                />
            </div>

            {erroEnvio && <p className="text-red-400 text-sm">{erroEnvio}</p>}

            <button
                type="submit"
                disabled={enviando}
                className="border p-2 font-bold uppercase mt-2 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                {enviando ? "Cadastrando..." : "Cadastrar"}
            </button>
        </form>
    );
}