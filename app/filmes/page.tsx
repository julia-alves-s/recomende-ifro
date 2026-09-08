import Card from "@/components/Card"; // ajuste o caminho conforme seu projeto

const avaliacoesMock = [
    {
        id: 1,
        idAutor: 1,
        titulo: "Interestelar",
        genero: "Filme",
        imagemUrl: "https://picsum.photos/seed/interestelar/400/300",
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

export default function TestePage() {
    return (
        <div className="min-h-screen bg-neutral-900 p-10">
            <h1 className="text-white text-2xl font-bold mb-6">
                Teste do componente Card
            </h1>
            <div className="flex flex-wrap gap-6">
                {avaliacoesMock.map((avaliacao) => (
                    <Card key={avaliacao.id} {...avaliacao} />
                ))}
            </div>
        </div>
    );
}