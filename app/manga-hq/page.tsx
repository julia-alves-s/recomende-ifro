import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import ListaAvaliacoes from "@/components/ListaAvaliacoes";

export default function mangaPage() {
    return (
        <>
            <Layout pagina="Sessão de Mangá/HQ">
                <div className="m-10">
                    <ListaAvaliacoes genero="manga-hq" />
                </div>
            </Layout>
        </>
    )
}