"use client";

import Image from "next/image";

import FooterLogo from "@/app/assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer-bg bg-no-repeat bg-cover bg-center flex items-center w-full py-1 px-24">
      <div className="flex items-center gap-x-4 w-9/12">
        <div className="h-7">
          <Image
            src={FooterLogo}
            alt="AGROS company logo"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <hr className="my-12 h-1 bg-white w-3/12" />
        <p className="text-white">
          PT ANTAR GLOBAL PROSPERO © {new Date().getFullYear()}. All rights
          reserved.
        </p>
      </div>
      <div className="flex items-center justify-around w-3/12">
        <p className="text-white">
          SYARAT & <br /> KETENTUAN
        </p>
        <p className="text-white">KEBIJAKAN PRIVASI</p>
      </div>
    </footer>
  );
}

export default Footer;
