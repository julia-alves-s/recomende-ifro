"use client";

interface CardProps {
    id: number;
    idAutor: number; // Fk -> id do autor
    titulo: string;
    genero: string; // tipagem (filme, jogo, série...)
    imagemUrl: string;
    sinopse: string;
    resenha: string;
    recomendacao: boolean;
}

function Card({
    titulo,
    imagemUrl,
    sinopse,
    resenha,
}: CardProps) {
    return (
        <div className="w-full max-w-md border overflow-hidden border-8 border-[#606060] rounded-xl bg-[#606060]">
            {/* Cabeçalho: título */}
            <div className="px-4 py-3">
                <h3 className="text-white font-bold uppercase tracking-wide">
                    {titulo}
                </h3>
            </div>

            {/* Faixa branca: destaque / resenha curta */}
            <div className="bg-white px-4 py-3">
                <p className="text-black font-bold">{resenha}</p>
            </div>

            {/* Corpo: imagem + sinopse */}
            <div className="bg-[#d9d9d9] p-4 flex gap-4 rounded-b-xl">
                <div className="w-24 h-32 flex-shrink-0 relative">
                    <img
                        src={imagemUrl}
                        alt={titulo}
                        className="w-full h-full object-cover"
                    />
                </div>
                <p className="text-sm text-black/80 leading-snug">
                    {sinopse}
                </p>
            </div>
        </div>
    );
}





import { useState } from "react";

function NovoPostForm() {
    const [urlInput, setUrlInput] = useState("");
    const [imagemUrl, setImagemUrl] = useState<string | null>(null);
    const [erro, setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState(false);

    async function buscarImagem() {
        setErro(null);
        setCarregando(true);
        try {
            const res = await fetch("/api/resolve-image", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: urlInput }),
            });
            const data = await res.json();

            if (!res.ok) {
                setErro(data.error ?? "Erro desconhecido");
                setImagemUrl(null);
                return;
            }

            setImagemUrl(data.imagemUrl);
        } finally {
            setCarregando(false);
        }
    }

    return (
        <div className="flex flex-col gap-3 text-white/80">
            <label className="text-sm">Link da imagem (ou da página)</label>
            <div className="flex gap-2">
                <input
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://..."
                    className="flex-1 border p-2 bg-transparent"
                />
                <button
                    type="button"
                    onClick={buscarImagem}
                    disabled={carregando || !urlInput}
                    className="border px-4 py-2"
                >
                    {carregando ? "Buscando..." : "Buscar"}
                </button>
            </div>

            {erro && <p className="text-red-400 text-sm">{erro}</p>}

            {imagemUrl && (
                <div className="w-full h-40 relative border">
                    <img src={imagemUrl} alt="Pré-visualização" className="w-full h-full object-cover" />
                </div>
            )}

            {/* imagemUrl fica pronto pra ser enviado junto do resto do form no submit final */}
        </div>
    );
}

export default Card; NovoPostForm