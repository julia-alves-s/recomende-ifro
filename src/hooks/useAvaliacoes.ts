"use client";

import { useEffect, useState, useCallback } from "react";
import { buscarAvaliacoes, Avaliacao } from "../lib/api";

export function useAvaliacoes(genero?: string) {
    const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    const carregar = useCallback(async () => {
        setCarregando(true);
        setErro(null);
        try {
            const todas = await buscarAvaliacoes();
            const filtradas = genero
                ? todas.filter((a) => a.genero === genero)
                : todas;
            setAvaliacoes(filtradas);
        } catch (err) {
            setErro("Não foi possível carregar as avaliações.");
        } finally {
            setCarregando(false);
        }
    }, [genero]);

    useEffect(() => {
        carregar();

        // atualiza a lista sozinho quando um post novo é criado em qualquer lugar da tela
        window.addEventListener("avaliacao-criada", carregar);
        return () => window.removeEventListener("avaliacao-criada", carregar);
    }, [carregar]);

    return { avaliacoes, carregando, erro, recarregar: carregar };
}