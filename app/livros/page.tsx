import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function livroPage() {
    return (
        <>
            <Layout pagina="Sessão de Livros">
                <div className="m-10">
                    <ListaAvaliacoes genero="livro" />
                </div>
            </Layout>
        </>
    )
}