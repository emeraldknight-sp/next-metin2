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
import { contents } from "@/mock/contents";

import Metin2Title from "../assets/metin2.webp";

export default function Home() {
	const [openMenu, setOpenMenu] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};

	const handleSlide = (newIndex: number) => {
		setCurrentIndex(newIndex);
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
					<article className="flex flex-col gap-4 w-[288px] md:w-1/2 lg:w-1/2 xl:w-1/3">
						<div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-4 lg:gap-16">
							<nav className="flex lg:flex-col gap-2">
								{contents.map((_, index) => (
									<Button
										key={index}
										ariaLabel={`click here to view the ${
											index === 0
												? "first slide"
												: index === 1
												  ? "second slide"
												  : "third slide"
										}`}
										className={`w-6 h-6 rounded-full z-10 ${
											currentIndex === index
												? "bg-white"
												: "bg-disabledGray bg-opacity-60"
										}`}
										onClick={() => handleSlide(index)}
									></Button>
								))}
							</nav>
							<div className="flex flex-col">
								<Image
									src={Metin2Title}
									className="border-b-[3px] border-disabledGray border-solid pb-2"
									alt="Metin 2"
									aria-label="Metin 2"
									priority
								/>
								<div className="relative h-[288px] md:h-[224px] xl:h-[256px]">
									{contents.map((element, index) => (
										<p
											key={index}
											className={`text-sm leading-8 transition-all duration-1000 ${
												currentIndex === index
													? "opacity-100"
													: "opacity-0 absolute top-0 left-0"
											}`}
										>
											{element.text}
										</p>
									))}
								</div>
								<div className="flex flex-row justify-start gap-4 mt-4">
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
							</div>
						</div>
					</article>
				</section>
			</main>
			<footer>
				<section className="container mx-auto p-4">
					<nav className="flex flex-row justify-end gap-4">
						<Button
							className="bg-transparent p-1 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-[1px]"
							ariaLabel="click to acess youtube"
						>
							<Link href="/">
								<FaYoutube size={16} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-1 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-[1px]"
							ariaLabel="click to acess twitter"
						>
							<Link href="/">
								<FaTwitter size={16} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-1 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-[1px]"
							ariaLabel="click to acess instagram"
						>
							<Link href="/">
								<FaInstagram size={16} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-1 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-[1px]"
							ariaLabel="click to acess facebook"
						>
							<Link href="/">
								<FaFacebookF size={16} />
							</Link>
						</Button>
						<Button
							className="bg-transparent p-1 rounded-full transition-all hover:brightness-90 hover:scale-105 active:scale-95 border-white border-[1px]"
							ariaLabel="click to acess steam"
						>
							<Link href="/">
								<FaSteam size={16} />
							</Link>
						</Button>
					</nav>
				</section>
			</footer>
		</div>
	);
}
