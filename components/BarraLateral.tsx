"use client"; 

import Link from "next/link";
import { useState } from "react";
import ModalPost from "./ModalPost";
import NovoPostForm from "./NovoPost";

export default function BarraLateral() {
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <div className="w-80 h-full bg-[#434343] flex flex-col justify-between text-white/80">
            <div>
                <div className="text-3xl font-bold flex justify-center mt-20 mb-5">
                    RECOMENDE
                </div>
                <div className="border-t m-5">
                    <div className="flex flex-col pt-5 gap-2">
                        <Link href={`/filmes`} className="flex items-center border p-2">
                            <p className="ml-2">FILMES</p>
                        </Link>
                        <Link href={`/jogos`} className="flex items-center border p-2">
                            <p className="ml-2">JOGOS</p>
                        </Link>
                        <Link href={`/series`} className="flex items-center border p-2">
                            <p className="ml-2">SÉRIES</p>
                        </Link>
                        <Link href={`/animacoes`} className="flex items-center border p-2">
                            <p className="ml-2">ANIMAÇÕES</p>
                        </Link>
                        <Link href={`/livros`} className="flex items-center border p-2">
                            <p className="ml-2">LIVROS</p>
                        </Link>
                        <Link href={`/manga-hq`} className="flex items-center border p-2">
                            <p className="ml-2">MANGÁ / HQ</p>
                        </Link>
                    </div>
                </div>
                <div className="border-t m-5">
                    <button className="flex items-center border p-2 mt-5 w-full cursor-pointer hover:bg-white/10 transition-colors" id="criar-post"
                    onClick={() => setModalAberto(true)}>
                        <p className="ml-2">CRIAR POSTAGEM</p>
                    </button>
                </div>
            </div>
                <ModalPost isOpen={modalAberto} onClose={() => setModalAberto(false)}>
                    <NovoPostForm onSuccess={() => setModalAberto(false)} />
                </ModalPost>
        </div>
    );
}
