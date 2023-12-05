"use client";

import Image from "next/image";
import Link from "next/link";
import LogoGameForge from "@/assets/logo-gameforge.svg";
import React, { useState } from "react";
import { Button } from "@/components/Button";
import {
	FaBars,
	FaFacebookF,
	FaInstagram,
	FaSteam,
	FaTwitter,
	FaYoutube,
} from "react-icons/fa";
import { Menu } from "@/components/Menu";

import Metin2Title from "../assets/metin2.webp";

export default function Home() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<div className="flex flex-col w-full h-screen bg-hero-pattern bg-cover bg-center bg-no-repeat">
			<header className="text-disabledGray font-semibold">
				<section className="container mx-auto p-4">
					<div className="flex flex-row justify-between items-center gap-20">
						<Image
							src={LogoGameForge}
							width={150}
							alt="Logo"
							aria-label="Logo"
						/>
						<Button
							className="lg:hidden text-white outline-none"
							onClick={handleClick}
							ariaLabel="Menu"
						>
							<FaBars size={24} />
						</Button>
						<Menu openMenu={openMenu} />
					</div>
				</section>
			</header>
			<main className="flex flex-1 text-white">
				<section className="container mx-auto p-4 flex flex-col justify-center">
					<article className="flex flex-col gap-4 w-[288px] md:w-1/2 lg:w-1/3">
						<div className="flex flex-col gap-2">
							<Image
								src={Metin2Title}
								className="border-b-[3px] border-disabledGray border-solid pb-2"
								alt="Metin 2"
								aria-label="Metin 2"
							/>
							<p className="text-sm leading-6">
								For a long time now the Dragon God&apos;s breath has watched
								over the kingdoms of Shinsoo, Chunjo and Jinno.
							</p>
							<p className="text-sm leading-6">
								But fascinating world of magic is facing a terrifying threat:
								The impact of the Metin Stones has not only torn wounds into the
								entire continent, but has also caused chaos and destruction
								throughout the land and its inhabitants.
							</p>
						</div>
						<div className="flex flex-row justify-start gap-4">
							<Button
								className="flex flex-1 lg:flex-none lg:w-28 px-4 py-2 lg:py-[10px] bg-red border-red rounded-2xl"
								ariaLabel="click here to play now"
							>
								<Link href="" className="text-white font-semibold">
									Play Now
								</Link>
							</Button>
							<Button
								className="flex flex-1 lg:flex-none lg:w-28 px-4 py-2 lg:py-[10px] bg-white border-white rounded-2xl"
								ariaLabel="click here to sign up"
							>
								<Link href="" className=" text-black font-semibold">
									Sign Up
								</Link>
							</Button>
						</div>
					</article>
				</section>
			</main>
			<footer>
				<section className="container mx-auto p-4">
					<nav className="flex flex-row justify-end gap-4">
						<Button
							className="bg-transparent p-2 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-2"
							ariaLabel="click to acess youtube"
						>
							<Link href="/">
								<FaYoutube size={20} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-2 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-2"
							ariaLabel="click to acess twitter"
						>
							<Link href="/">
								<FaTwitter size={20} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-2 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-2"
							ariaLabel="click to acess instagram"
						>
							<Link href="/">
								<FaInstagram size={20} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-2 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-2"
							ariaLabel="click to acess facebook"
						>
							<Link href="/">
								<FaFacebookF size={20} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-2 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-2"
							ariaLabel="click to acess steam"
						>
							<Link href="/">
								<FaSteam size={20} />
							</Link>
						</Button>
					</nav>
				</section>
			</footer>
		</div>
	);
}
