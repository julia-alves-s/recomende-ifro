"use client";

import { useAvaliacoes } from "../src/hooks/useAvaliacoes";
import Card from "./Card";

interface ListaAvaliacoesProps {
    genero: string;
}

export default function ListaAvaliacoes({ genero }: ListaAvaliacoesProps) {
    const { avaliacoes, carregando, erro, recarregar } = useAvaliacoes(genero);

    if (carregando) return <p className="text-white/60">Carregando...</p>;
    if (erro) return <p className="text-red-400">{erro}</p>;
    if (avaliacoes.length === 0)
        return <p className="text-white/60">Nenhuma avaliação encontrada.</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {avaliacoes.map((a) => (
                <Card
                    key={a.id}
                    id={a.id}
                    idAutor={a.idAutor}
                    titulo={a.titulo}
                    genero={a.genero}
                    imagemUrl={a.imagemUrl}
                    sinopse={a.sinopse}
                    resenha={a.resenha}
                    recomendacao={a.recomendacao}
                    onExcluido={recarregar}
                />
            ))}
        </div>
    );
}