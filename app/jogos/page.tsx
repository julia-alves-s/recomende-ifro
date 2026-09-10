import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function jogoPage() {
    return (
        <>
            <Layout pagina="Sessão de Jogos">
                <div className="m-10">
                    <ListaAvaliacoes genero="jogo" />
                </div>
            </Layout>
        </>
    )
}