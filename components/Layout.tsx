import BarraLateral from "./BarraLateral";
import Header from "./Header";

interface LayoutProps {
    pagina: string
    children: React.ReactNode
}

export default function Layout({ pagina, children }: LayoutProps) {
    return (
        <div className="h-screen flex overflow-hidden">
            <BarraLateral />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header pagina={pagina} />
                <main className="flex-1 overflow-y-auto bg-[#353535]">
                    {children}
                </main>
            </div>
        </div>
    )
}