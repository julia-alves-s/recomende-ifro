"use client";

import Link from "next/link";
import { useState } from "react";
import ModalPost from "./ModalPost";
import NovoPostForm from "./NovoPost";
import LoginForm from "./login";
import CadastroForm from "./cadastro";

export default function BarraLateral() {
    const [modalPostAberto, setModalPostAberto] = useState(false);
    const [modalLoginAberto, setModalLoginAberto] = useState(false);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);

    return (
        <div className="w-80 h-full bg-[#434343] flex flex-col justify-between text-white/80">
            <div>
                <div className="text-3xl font-bold flex justify-center mt-14 mb-5">
                    RECOMENDE
                </div>
                <div className="border-t m-5">
                    <div className="flex flex-col pt-5 gap-2">
                        <Link href={`/filmes`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">FILMES</p>
                        </Link>
                        <Link href={`/jogos`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">JOGOS</p>
                        </Link>
                        <Link href={`/series`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">SÉRIES</p>
                        </Link>
                        <Link href={`/animacoes`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">ANIMAÇÕES</p>
                        </Link>
                        <Link href={`/livros`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">LIVROS</p>
                        </Link>
                        <Link href={`/manga-hq`} className="flex items-center border p-2 cursor-pointer hover:bg-white/10 transition-colors">
                            <p className="ml-2">MANGÁ / HQ</p>
                        </Link>
                    </div>
                </div>
                <div className="border-t m-5">
                    <button
                        className="flex items-center border p-2 mt-5 w-full cursor-pointer hover:bg-white/10 transition-colors"
                        id="criar-post"
                        onClick={() => setModalPostAberto(true)}>
                        <p className="ml-2">CRIAR POSTAGEM</p>
                    </button>
                </div>

                <div className="absolute bottom-0 w-80 mb-10">
                    <div className="ml-5 mr-5">
                        <div>
                            <button
                                className="flex items-center border p-2 mt-5 w-full cursor-pointer hover:bg-white/10 transition-colors"
                                id="login"
                                onClick={() => setModalLoginAberto(true)}>
                                <p className="ml-2">LOGIN</p>
                            </button>
                        </div>
                        <div className="mt-2">
                            <button
                                className="flex items-center border p-2 w-full cursor-pointer hover:bg-white/10 transition-colors"
                                id="cadastro"
                                onClick={() => setModalCadastroAberto(true)}>
                                <p className="ml-2">CADASTRAR</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ModalPost isOpen={modalPostAberto} onClose={() => setModalPostAberto(false)}>
                <NovoPostForm onSuccess={() => setModalPostAberto(false)} />
            </ModalPost>

            <ModalPost isOpen={modalLoginAberto} onClose={() => setModalLoginAberto(false)}>
                <LoginForm onSuccess={() => setModalLoginAberto(false)} />
            </ModalPost>

            <ModalPost isOpen={modalCadastroAberto} onClose={() => setModalCadastroAberto(false)}>
                <CadastroForm onSuccess={() => setModalCadastroAberto(false)} />
            </ModalPost>
        </div>
    );
}