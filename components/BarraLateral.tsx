"use client";

import Link from "next/link";
import { useState } from "react";
import ModalPost from "./ModalPost";
import NovoPostForm from "./NovoPost";
import LoginForm from "./login";
import CadastroForm from "./cadastro";
import { usePathname } from "next/navigation";

export default function BarraLateral() {
    const [modalPostAberto, setModalPostAberto] = useState(false);
    const [modalLoginAberto, setModalLoginAberto] = useState(false);
    const [modalCadastroAberto, setModalCadastroAberto] = useState(false);

    const pathname = usePathname();
    const categorias = [
        { nome: "FILMES", href: "/filmes" },
        { nome: "JOGOS", href: "/jogos" },
        { nome: "SÉRIES", href: "/series" },
        { nome: "ANIMAÇÕES", href: "/animacoes" },
        { nome: "LIVROS", href: "/livros" },
        { nome: "MANGÁ / HQ", href: "/manga-hq" },
    ];

    return (
        <div className="relative w-[clamp(220px,20vw,320px)] shrink-0 h-full bg-[#434343] flex flex-col justify-between text-white/80">
            <div className="text-[clamp(0.8rem,1vw,1.2rem)]">
                <div className="text-3xl font-bold flex justify-center mt-14 mb-5">
                    RECOMENDE
                </div>
                <div className="border-t m-5">
                    <div className="flex flex-col pt-5 gap-2">

                        {categorias.map((categoria) => {
                            const ativo = pathname === categoria.href;

                            return (
                                <Link
                                    key={categoria.href}
                                    href={categoria.href}
                                    className={`flex items-center border p-2 cursor-pointer transition-colors rounded-xl ${
                                        ativo ? "bg-[#171717] border-[#171717] w-[clamp(204px,18.64vw,304px)] rounded-r-none font-bold" : "hover:bg-white/10"}`}>
                                    <p className="ml-2">{categoria.nome}</p>
                                </Link>
                            );
                        })}
                    </div>
                    
                </div>
                <div className="border-t m-5">
                    <button
                        className="flex items-center border p-2 mt-5 w-full cursor-pointer hover:bg-white/10 transition-colors rounded-xl"
                        id="criar-post"
                        onClick={() => setModalPostAberto(true)}>
                        <p className="ml-2">CRIAR POSTAGEM</p>
                    </button>
                </div>

                <div className="absolute bottom-0 left-0 w-full mb-10">
                    <div className="ml-5 mr-5">
                        <div>
                            <button
                                className="flex items-center border p-2 mt-5 w-full cursor-pointer hover:bg-white/10 transition-colors rounded-xl"
                                id="login"
                                onClick={() => setModalLoginAberto(true)}>
                                <p className="ml-2">LOGIN</p>
                            </button>
                        </div>
                        <div className="mt-2">
                            <button
                                className="flex items-center border p-2 w-full cursor-pointer hover:bg-white/10 transition-colors rounded-xl"
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