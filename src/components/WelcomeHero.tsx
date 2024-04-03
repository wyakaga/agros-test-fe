"use client";

import { useRouter } from "next/navigation";

function WelcomeHero() {
  const router = useRouter();

  return (
    <section className="hero-bg bg-no-repeat bg-cover bg-center w-full flex flex-col rounded-[10px] gap-y-4 p-6">
      <h2 className="text-primary font-bold text-[2rem]">
        Selamat datang, Kerabat!
      </h2>
      <p className="text-white">
        Kami hadir dengan membawakan solusi terbaik untuk kebutuhan logistik
        Anda. <br /> Melayani dengan sepenuh hati untuk kenyaman Anda dan
        keamanan barang sampai pada tujuan. <br /> Silakan melakukan pendaftaran
        untuk dapat menikmati layanan kami.
      </p>
      <div className="flex gap-x-2 w-2/12">
        <button onClick={() => router.push("/login")} className="w-full flex justify-center items-center py-1 px-1 border border-primary text-primary rounded-[7px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300">
          MASUK
        </button>
        <button onClick={() => router.push("/register")} className="w-full flex justify-center items-center py-1 px-1 border border-primary text-secondary bg-primary rounded-[7px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300">
          DAFTAR
        </button>
      </div>
    </section>
  );
}

export default WelcomeHero;
