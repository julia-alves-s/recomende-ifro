import Card from "@/components/Card"; // ajuste o caminho conforme seu projeto
import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function filmePage() {
    return (
        <>
            <Layout pagina="Sessão de Filmes">
                <div className="m-10">
                    <ListaAvaliacoes genero="filme" />
                </div>
            </Layout>
        </>
    )
}