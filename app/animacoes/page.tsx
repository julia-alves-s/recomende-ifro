import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function testPage() {
    return (
        <>
            <Layout pagina="Sessão de Animações">
                <div className="m-10">
                    <ListaAvaliacoes genero="animacao" />
                </div>
            </Layout>
        </>
    )
}