import Link from "next/link";
import React from "react";
import { Button } from "@/components/Button";

import { menuOptions } from "@/mock/menuOptions";
import { usePathname } from "next/navigation";

interface MenuProps {
  openMenu: boolean;
}

export const Menu = ({ openMenu }: MenuProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-col gap-6 fixed top-16 w-72  transition-all ${
        openMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      } lg:flex lg:flex-row lg:flex-1 lg:justify-between lg:items-center lg:min-w-max lg:static lg:gap-4 lg:translate-x-0 lg:opacity-100`}
    >
      <ul className="flex flex-col lg:items-center lg:flex-row gap-4 lg:gap-10">
        {menuOptions.map((option) => (
          <li key={option.id}>
            <Link
              href={option.url}
              className={`${
                pathname === option.url
                  ? "text-white underline underline-offset-4 decoration-1"
                  : "text-disabledGray"
              } hover:text-white transition-all duration-300`}
            >
              {option.name}
            </Link>
          </li>
        ))}
        <li>
          <select
            name="language"
            id="language"
            aria-label="select your language"
            className="text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none"
          >
            <option value="EN">EN</option>
            <option value="ES">ES</option>
            <option value="PT">PT</option>
            <option value="IT">IT</option>
          </select>
        </li>
      </ul>
      <div className="flex gap-2">
        <Button
          className="flex-1 bg-transparent px-4 py-2 border-white border-[1px] rounded-xl"
          ariaLabel="Login"
        >
          <Link
            href="https://minhaconta.ongame.net/entrar/?site=metin-2&url=https://m2.ongame.net/"
            className="text-white text-xs"
          >
            Login
          </Link>
        </Button>
        <Button
          className="flex-1 bg-green px-4 py-2 border-green border-[1px] rounded-xl"
          ariaLabel="Download"
        >
          <Link
            href="https://m2.ongame.net/download/ongame-downloader/"
            className="text-white text-xs"
          >
            Download
          </Link>
        </Button>
      </div>
    </nav>
  );
};
