import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function seriePage() {
    return (
        <>
            <Layout pagina="Sessão de Séries">
                <div className="m-10">
                    <ListaAvaliacoes genero="serie" />
                </div>
            </Layout>
        </>
    )
}