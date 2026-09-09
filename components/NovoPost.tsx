"use client";

import { useState } from "react";

interface NovoPostFormProps {
    onSuccess?: () => void;
}

export default function NovoPostForm({ onSuccess }: NovoPostFormProps) {
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [resenha, setResenha] = useState("");
    const [recomendacao, setRecomendacao] = useState(true);

    const [urlInput, setUrlInput] = useState("");
    const [imagemUrl, setImagemUrl] = useState<string | null>(null);
    const [erroImagem, setErroImagem] = useState<string | null>(null);
    const [buscandoImagem, setBuscandoImagem] = useState(false);

    const [enviando, setEnviando] = useState(false);
    const [erroEnvio, setErroEnvio] = useState<string | null>(null);

    async function buscarImagem() {
        setErroImagem(null);
        setBuscandoImagem(true);
        try {
            const res = await fetch("/api/resolve-imagem", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url: urlInput }),
            });
            console.log("status:", res.status); // temporário, pra debug
            const data = await res.json();
            console.log("resposta:", data); // temporário, pra debug

            if (!res.ok) {
                setErroImagem(data.error ?? "Erro desconhecido");
                setImagemUrl(null);
                return;
            }

            setImagemUrl(data.imagemUrl);
        } catch (err) {
            console.error("Erro inesperado ao buscar imagem:", err); // temporário, pra debug
            setErroImagem("Erro inesperado ao buscar a imagem.");
        } finally {
            setBuscandoImagem(false);
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErroEnvio(null);

        if (!imagemUrl) {
            setErroEnvio("Busque e confirme uma imagem antes de publicar.");
            return;
        }

        setEnviando(true);
        try {
            const res = await fetch("http://localhost:3333/avaliacoes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    titulo,
                    genero,
                    imagemUrl,
                    sinopse,
                    resenha,
                    recomendacao,
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => null);
                setErroEnvio(data?.error ?? "Erro ao publicar a avaliação.");
                return;
            }

            onSuccess?.();
        } finally {
            setEnviando(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold uppercase">Criar postagem</h2>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Título</label>
                <input
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    className="border p-2 bg-transparent rounded-xl"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Gênero</label>
                <select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    required
                    className="border p-2 bg-[#2e2e2e] rounded-xl">
                    <option value="" disabled>Selecione...</option>
                    <option value="filme">Filme</option>
                    <option value="jogo">Jogo</option>
                    <option value="serie">Série</option>
                    <option value="animacao">Animação</option>
                    <option value="livro">Livro</option>
                    <option value="manga-hq">Mangá / HQ</option>
                </select>
            </div>

            <div className="flex flex-col gap-1 rounded-xl">
                <label className="text-sm">Link da imagem (ou da página)</label>
                <div className="flex gap-2">
                    <input
                        value={urlInput}
                        onChange={(e) => setUrlInput(e.target.value)}
                        placeholder="https://..."
                        className="flex-1 border p-2 bg-transparent rounded-xl"
                    />
                    <button
                        type="button"
                        onClick={buscarImagem}
                        disabled={buscandoImagem || !urlInput}
                        className="border px-4 py-2 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                        {buscandoImagem ? "Buscando..." : "Buscar"}
                    </button>
                </div>
                {erroImagem && <p className="text-red-400 text-sm">{erroImagem}</p>}
                {imagemUrl && (
                    <div className="w-full h-40 relative border mt-2">
                        <img src={imagemUrl} alt="Pré-visualização" className="w-full h-full object-cover" />
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Sinopse</label>
                <textarea
                    value={sinopse}
                    onChange={(e) => setSinopse(e.target.value)}
                    required
                    rows={3}
                    className="border p-2 bg-transparent resize-none rounded-xl scrollbar-custom"
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm">Resenha</label>
                <textarea
                    value={resenha}
                    onChange={(e) => setResenha(e.target.value)}
                    required
                    rows={3}
                    className="border p-2 bg-transparent resize-none rounded-xl scrollbar-custom"
                />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="recomendacao"
                    checked={recomendacao}
                    onChange={(e) => setRecomendacao(e.target.checked)}
                />
                <label htmlFor="recomendacao" className="text-sm">Recomendo</label>
            </div>

            {erroEnvio && <p className="text-red-400 text-sm">{erroEnvio}</p>}

            <button
                type="submit"
                disabled={enviando}
                className="border p-2 font-bold uppercase mt-2 rounded-xl cursor-pointer hover:bg-white/10 transition-colors">
                {enviando ? "Publicando..." : "Publicar"}
            </button>
        </form>
    );
}
