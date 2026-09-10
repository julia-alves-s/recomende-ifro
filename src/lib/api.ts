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

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function buscarAvaliacoes(): Promise<Avaliacao[]> {
    const res = await fetch(`${API_URL}/avaliacoes`, {
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Erro ao buscar avaliações");
    }

    const data = await res.json();

    return data.dados ?? data.data ?? data;
}