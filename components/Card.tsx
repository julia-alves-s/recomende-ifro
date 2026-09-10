"use client";

import { useAuth } from "../src/context/AuthContext";

interface CardProps {
    id: number;
    idAutor: string;
    titulo: string;
    genero: string;
    imagemUrl: string;
    sinopse: string;
    resenha: string;
    recomendacao: boolean;
    onExcluido?: () => void;
}

export default function Card({
    id,
    idAutor,
    titulo,
    imagemUrl,
    sinopse,
    resenha,
    onExcluido,
}: CardProps) {
    const { usuario } = useAuth();
    const ehDono = usuario?.id === idAutor;

    async function excluir() {
        if (!confirm("Excluir esta avaliação?")) return;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/avaliacoes/${id}`, {
            method: "DELETE",
            credentials: "include",
        });

        if (res.ok) {
            onExcluido?.();
        } else {
            alert("Erro ao excluir a avaliação.");
        }
    }

    return (
        <div className="w-full max-w-md border overflow-hidden border-8 border-[#606060] rounded-xl bg-[#606060]">
            <div className="px-4 py-3 flex justify-between items-center">
                <h3 className="text-white font-bold uppercase tracking-wide">
                    {titulo}
                </h3>
                {ehDono && (
                    <button
                        onClick={excluir}
                        className="text-white/70 hover:text-white transition-colors cursor-pointer"
                        aria-label="Excluir avaliação"
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="bg-white px-4 py-3">
                <p className="text-black font-bold">{resenha}</p>
            </div>

            <div className="bg-[#d9d9d9] p-4 flex gap-4 rounded-b-xl">
                <div className="w-24 h-32 flex-shrink-0 relative">
                    <img src={imagemUrl} alt={titulo} className="w-full h-full object-cover" />
                </div>
                <p className="text-sm text-black/80 leading-snug">{sinopse}</p>
            </div>
        </div>
    );
}