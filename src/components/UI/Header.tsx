"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import agrosLogo from "@/app/assets/logo-brand.png";

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[1] flex justify-between w-full py-6 lg:px-24 px-10 bg-white">
      <Link href={"/"}>
        <Image src={agrosLogo} alt="AGROS company logo" />
      </Link>
      <div className="flex items-center gap-x-6 text-sm text-black">
        <Link
          href={"/about"}
          className={clsx("hover:text-secondary transition-all duration-300", {
            "text-secondary": pathname === "/about",
          })}
        >
          TENTANG
        </Link>
        <Link
          href={"/profile"}
          className={clsx("hover:text-secondary transition-all duration-300", {
            "text-secondary": pathname === "/profile",
          })}
        >
          PROFIL
        </Link>
      </div>
    </header>
  );
}

export default Header;
