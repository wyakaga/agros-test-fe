import Link from "next/link";

import Input from "@/components/UI/Input";
import UserStory from "@/components/UserStory";

const Register = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-24 gap-y-16">
      <section className="flex flex-col gap-y-3 w-full">
        <div className="flex flex-col gap-y-4 text-black">
          <h2 className="font-bold text-[2rem]">Daftar Sekarang</h2>
          <p>Mari bergabung bersama Kerabat AGROS Indonesia lainnya.</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <form className="flex flex-col gap-y-3 w-full">
            <div id="inputs" className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-y-2">
                <label htmlFor="fullName" className="font-bold text-xs">
                  Nama Lengkap Kerabat
                </label>
                <Input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  placeholder="Contoh: Bambang"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="city" className="font-bold text-xs">
                  Asal Kota
                </label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Contoh: Pekalongan"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="email" className="font-bold text-xs">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Contoh: bambang@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="password" className="font-bold text-xs">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="******"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold text-xs">Role</p>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="superadmin"
                      className="h-5 w-5 appearance-none rounded-full border-4 border-solid border-[#E8E8E8] checked:border-secondary bg-white checked:bg-primary transition-all active:transform active:scale-110 duration-300 cursor-pointer"
                    />
                    <label htmlFor="superadmin">Super Admin</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="customer"
                      className="h-5 w-5 appearance-none rounded-full border-4 border-solid border-[#E8E8E8] checked:border-secondary bg-white checked:bg-primary transition-all active:transform active:scale-110 duration-300 cursor-pointer"
                    />
                    <label htmlFor="customer">Customer</label>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-6/12 flex items-center py-2 px-4 bg-secondary hover:bg-white text-white hover:text-secondary border border-transparent font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300">
              Gabung Sekarang
            </button>
            <p>
              Sudah memiliki Akun?{" "}
              <Link href={"/login"} className="text-secondary">
                Masuk sekarang
              </Link>
            </p>
          </form>
        </div>
      </section>
      <UserStory />
    </main>
  );
};

export default Register;
