import Card from "@/components/Card"; // ajuste o caminho conforme seu projeto
import BarraLateral from "@/components/BarraLateral";
import Header from "@/components/Header";
import Layout from "@/components/Layout";

export default function testPage() {
    return (
        <>
            <Layout pagina="Sessão de Filmes">
                <div className="min-h-screen p-10">
                    <div className="flex flex-wrap gap-6">
                        {avaliacoesMock.map((avaliacao) => (
                        <Card key={avaliacao.id} {...avaliacao} />
                        ))}
                    </div>
                </div>
            </Layout>
        </>
    )
}


const avaliacoesMock = [
    {
        id: 1,
        idAutor: 1,
        titulo: "Interestelar",
        genero: "Filme",
        imagemUrl: "https://rollingstone.com.br/wp-content/uploads/2025/01/interestelar-de-christopher-nolan-reestreia-nos-cinemas-brasileiros.jpg",
        sinopse:
            "Um grupo de exploradores viaja através de um buraco de minhoca no espaço em busca de um novo lar para a humanidade.",
        resenha:
            "Visualmente impressionante e emocionalmente pesado. A trilha sonora do Hans Zimmer carrega boa parte do impacto do filme.",
        recomendacao: true,
    },
    {
        id: 2,
        idAutor: 1,
        titulo: "Cyberpunk 2077",
        genero: "Jogo",
        imagemUrl: "https://picsum.photos/seed/cyberpunk/400/300",
        sinopse:
            "Em Night City, um mercenário busca um implante único que é a chave para a imortalidade.",
        resenha:
            "No lançamento tinha muitos bugs, mas hoje em dia está bem mais estável e a história continua excelente.",
        recomendacao: false,
    },
    {
        id: 3,
        idAutor: 2,
        titulo: "Attack on Titan",
        genero: "Animação",
        imagemUrl: "https://picsum.photos/seed/aot/400/300",
        sinopse:
            "A humanidade vive cercada por muralhas para se proteger de titãs gigantes que devoram pessoas.",
        resenha:
            "Um dos melhores desfechos de anime dos últimos anos, mesmo com o ritmo irregular em algumas partes.",
        recomendacao: true,
    },
];