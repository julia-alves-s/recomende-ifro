
interface Pag {
    pagina: string
}


export default function Header({pagina}: Pag) {
    return (
        <header className="bg-[#282828] p-3">
            <div className="flex items-center relative justify-center">
                <p className="flex text-center text-gray-400 text-[20px]">
                    {pagina}
                </p>
            </div>
        </header>
    )
}

