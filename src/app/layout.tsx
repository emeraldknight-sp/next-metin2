import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";

import "../styles/reset.css";
import "../styles/globals.css";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Metin2 | Gameforge",
	description:
		"Torna-te parte do lendário MMO de acção oriental! Testa as tuas habilidades em épicas batalhas PvE contra dragões e sinistros lordes dos demónios, participa em implacáveis duelos PvP e torna-te num verdadeiro mestre das artes marciais!",
	category: "game",
	applicationName: "Next Project Metin2",
	authors: { name: "Gameforge", url: "https://gameforge.com/pt-PT/" },
	generator: "Next.js",
	keywords:
		"Metin2, MMORPG, Jogo Online, Armas e Armaduras, Missões Épicas, Guildas e Alianças, Personagens e Classes, Combate PvP, Monstros e Criaturas, Mapas e Territórios, Itens e Equipamentos, Desenvolvimento de Personagem, Eventos Especiais, Mercado e Economia do Jogo, Magias e Habilidades, Estratégias de Combate, Comércio e Negociação, Aventuras e Exploração, Sistema de Níveis,Comunidade de Jogadores",
	creator: "Next.js",
	publisher: "Gameforge",
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	openGraph: {
		type: "website",
		url: "https://next-project-metin2.vercel.app",
		title: "Metin2 | Gameforge",
		description:
			"Metin2, MMORPG, Jogo Online, Armas e Armaduras, Missões Épicas, Guildas e Alianças, Personagens e Classes, Combate PvP, Monstros e Criaturas, Mapas e Territórios, Itens e Equipamentos, Desenvolvimento de Personagem, Eventos Especiais, Mercado e Economia do Jogo, Magias e Habilidades, Estratégias de Combate, Comércio e Negociação, Aventuras e Exploração, Sistema de Níveis,Comunidade de Jogadores",
		siteName: "Metin2 | Gameforge",
		images: [
			{
				url: "./assets/logo-gameforge.svg",
			},
		],
	},
	referrer: "origin-when-cross-origin",
	manifest: "/site.webmanifest",
	icons: [
		{ rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
		{
			rel: "icon",
			type: "image/png",
			sizes: "32x32",
			url: "/favicon-32x32.png",
		},
		{
			rel: "icon",
			type: "image/png",
			sizes: "16x16",
			url: "/favicon-16x16.png",
		},
	],
	appleWebApp: {
		capable: true,
		title: "Metin2",
		statusBarStyle: "default",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
	colorScheme: "dark",
};

interface RootProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootProps) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
