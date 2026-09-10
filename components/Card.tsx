"use client";

interface CardProps {
    id: number;
    idAutor: number; // Fk -> id do autor
    titulo: string;
    genero: string; // tipagem (filme, jogo, série...)
    imagemUrl: string;
    sinopse: string;
    resenha: string;
    recomendacao: boolean;
}

export default function Card({
    titulo,
    imagemUrl,
    sinopse,
    resenha,
    recomendacao,
}: CardProps) {
    return (
        <div className="w-full max-w-md border overflow-hidden border-8 border-[#606060] rounded-xl bg-[#606060]">
            {/* Cabeçalho: título */}
            <div className="px-4 py-3">
                <h3 className="text-white font-bold uppercase tracking-wide">
                    {titulo}
                </h3>
            </div>

            {/* Faixa branca: destaque / resenha curta */}
            <div className="bg-white px-4 py-3">
                <p className="text-black font-bold">{resenha}</p>
            </div>

            {/* Corpo: imagem + sinopse */}
            <div className="bg-[#d9d9d9] p-4 flex gap-4 rounded-b-xl">
                <div className="w-24 h-32 flex-shrink-0 relative">
                    <img
                        src={imagemUrl}
                        alt={titulo}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col justify-between flex-1">
                    <p className="text-sm text-black/80 leading-snug">
                        {sinopse}
                    </p>

                    <div className="flex justify-end mt-2">
                        {recomendacao ? (
                            <span className="bg-green-500 rounded-xl text-xs border border-green-600 px-2 py-1 text-white">
                                RECOMENDADO
                            </span>
                        ) : (
                            <span className="bg-red-500 rounded-xl text-xs border border-red-600 px-2 py-1 text-white">
                                NÃO RECOMENDADO
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}