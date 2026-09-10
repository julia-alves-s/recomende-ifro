export interface Avaliacao {
    id: number;
    idAutor: string;
    titulo: string;
    genero: string;
    imagemUrl: string;
    sinopse: string;
    resenha: string;
    recomendacao: boolean;
}

export async function buscarAvaliacoes(): Promise<Avaliacao[]> {
    const res = await fetch("http://localhost:3333/avaliacoes", {
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Erro ao buscar avaliações");
    }

    const data = await res.json();

    return data.dados ?? data.data ?? data;
}