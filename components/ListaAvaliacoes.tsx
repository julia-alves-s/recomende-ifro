"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useAvaliacoes } from "../src/hooks/useAvaliacoes";
import Card from "./Card";

interface ListaAvaliacoesProps {
    genero: string;
}

const NUM_COLUNAS = 3; // pode tornar responsivo depois, ver nota abaixo

export default function ListaAvaliacoes({ genero }: ListaAvaliacoesProps) {
    const { avaliacoes, carregando, erro, recarregar } = useAvaliacoes(genero);
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [colunas, setColunas] = useState<number[][] | null>(null);

    useLayoutEffect(() => {
        if (avaliacoes.length === 0) return;

        const alturas = new Array(NUM_COLUNAS).fill(0);
        const novasColunas: number[][] = Array.from({ length: NUM_COLUNAS }, () => []);

        avaliacoes.forEach((_, index) => {
            const altura = refs.current[index]?.getBoundingClientRect().height ?? 0;
            const colunaMaisCurta = alturas.indexOf(Math.min(...alturas));
            novasColunas[colunaMaisCurta].push(index);
            alturas[colunaMaisCurta] += altura;
        });

        setColunas(novasColunas);
    }, [avaliacoes]);

    if (carregando) return <p className="text-white/60">Carregando...</p>;
    if (erro) return <p className="text-red-400">{erro}</p>;
    if (avaliacoes.length === 0)
        return <p className="text-white/60">Nenhuma avaliação encontrada.</p>;

    return (
        <>
            <div style={{ position: "absolute", top: 0, left: "-9999px", visibility: "hidden" }} aria-hidden="true">
            <div className="absolute opacity-0 pointer-events-none -z-10" aria-hidden="true">
                {avaliacoes.map((a, index) => (
                    <div key={a.id} ref={(el) => { refs.current[index] = el; }} className="w-full max-w-md">
                        <Card
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
                    </div>
                ))}
            </div>
            </div>

            {colunas && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {colunas.map((coluna, i) => (
                        <div key={i} className="flex flex-col gap-6">
                            {coluna.map((index) => {
                                const a = avaliacoes[index];
                                return (
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
                                );
                            })}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}