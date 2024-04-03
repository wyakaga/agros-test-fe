import Link from "next/link";
import Image from "next/image";

import agrosLogo from "@/app/assets/logo-brand.png";

function Header() {
  return (
    <header className="sticky top-0 z-[1] flex justify-between w-full py-6 px-24 bg-white">
      <div>
        <Image src={agrosLogo} alt="AGROS company logo" />
      </div>
      <div className="flex items-center gap-x-6 text-sm text-black">
        <Link href={"/about"}>TENTANG</Link>
        <Link href={"/profile"}>PROFIL</Link>
      </div>
    </header>
  );
}

export default Header;
