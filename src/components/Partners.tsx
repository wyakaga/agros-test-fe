"use client";

import { useRouter } from "next/navigation";

function Partners() {
  const router = useRouter();

  return (
    <section className="w-full flex flex-col gap-y-6 text-black">
      <h2 className="font-bold text-[2rem]">Mitra AGROS</h2>
      <p>
        Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
        keamanan kepada para pelanggan setia AGROS Indonesia.Untuk melihat
        daftar pelanggan kami, silakan melakukan pendaftaran.
      </p>
      <div className="flex justify-center items-center">
        <button onClick={() => router.push("/register")} className="w-2/12 flex justify-center items-center py-1 px-1 border border-transparent bg-secondary text-primary rounded-[7px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300">
          Gabung Sekarang
        </button>
      </div>
    </section>
  );
}

export default Partners;
