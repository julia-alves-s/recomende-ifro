import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { url } = await req.json();

    if (!url || !isValidUrl(url)) {
        return NextResponse.json({ error: "URL inválida" }, { status: 400 });
    }

    try {
        // checa se já é uma imagem direta (via Content-Type)
        const head = await fetch(url, { method: "HEAD" });
        const contentType = head.headers.get("content-type") ?? "";

        if (contentType.startsWith("image/")) {
            return NextResponse.json({ imagemUrl: url });
        }

        //se não for, tenta extrair og:imagem da página
        const res = await fetch(url, {
            headers: { "User-Agent": "Mozilla/5.0" },
        });
        const html = await res.text();

        const match =
            html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
            html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);

        if (match) {
            return NextResponse.json({ imagemUrl: match[1] });
        }

        return NextResponse.json({ error: "Não foi possível encontrar uma imagem" }, { status: 422 });
    } catch (err) {
        return NextResponse.json({ error: "Erro ao acessar o link" }, { status: 500 });
    }
}

function isValidUrl(url: string) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}