import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/', // Rota inicial antiga
        destination: '/filmes', // Para onde o usuário será enviado
        permanent: true, // true (código 308 permanente) ou false (código 307 temporário)
      },
    ];
  },
};

export default nextConfig;
