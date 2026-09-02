"use client"; 

import Link from "next/link";

export default function BarraLateral() {
    return (
        <div className="w-80 h-full bg-[#434343] flex flex-col justify-between text-white/80">
            <div>
                <div className="text-3xl font-bold flex justify-center mt-20 mb-5">
                    RECOMENDE
                </div>
                <div className="border-t m-5">
                    <div className="flex flex-col pt-5 gap-2">
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">FILMES</p>
                        </Link>
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">JOGOS</p>
                        </Link>
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">SÉRIES</p>
                        </Link>
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">ANIMAÇÕES</p>
                        </Link>
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">LIVROS</p>
                        </Link>
                        <Link href={`/`} className="flex items-center border p-2">
                            <p className="ml-2">MANGÁ / HQ</p>
                        </Link>
                    </div>
                </div>
                <div className="border-t m-5">
                    <Link href={`/`} className="flex items-center border p-2 mt-5">
                        <p className="ml-2">CRIAR POSTAGEM</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
