"use client";

import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import Input from "@/components/UI/Input";
import UserStory from "@/components/UserStory";
import { useRegisterMutation } from "@/services/auth";

const Register = () => {
  const router = useRouter();

  const controller = useMemo(() => new AbortController(), []);

  const registerMutate = useRegisterMutation();

  const [registerForm, setRegisterForm] = useState({
    fullName: "",
    city: "",
    email: "",
    password: "",
    role: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    city: "",
    email: "",
    password: "",
    role: "",
  });

  const emailRegex = useMemo(
    () => /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    []
  );

  const pwdRegex = useMemo(
    () => /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W).+$/,
    []
  );

  useEffect(() => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (registerForm.email && !emailRegex.test(registerForm.email)) {
        newErrors.email = "Format email tidak valid";
      } else {
        newErrors.email = "";
      }

      if (registerForm.password && registerForm.password.length < 8) {
        newErrors.password = "Password setidaknya memiliki 8 karakter";
      } else if (
        registerForm.password &&
        !pwdRegex.test(registerForm.password)
      ) {
        newErrors.password =
          "Password setidaknya memiliki 1 huruf kecil, 1 huruf besar, 1 angka & 1 simbol";
      } else {
        newErrors.password = "";
      }

      return newErrors;
    });
  }, [emailRegex, pwdRegex, registerForm]);

  const allFieldsFilled = Object.values(registerForm).every(
    (value) => value.trim() !== ""
  );

  const handleRegisterInput = (e: ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    registerMutate.mutate(
      {
        body: registerForm,
        controller,
      },
      {
        onSuccess: () => {
          router.push("/login");
        },
      }
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-24 gap-y-16">
      <section className="flex flex-col gap-y-3 w-full">
        <div className="flex flex-col gap-y-4 text-black">
          <h2 className="font-bold text-[2rem]">Daftar Sekarang</h2>
          <p>Mari bergabung bersama Kerabat AGROS Indonesia lainnya.</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <form
            className="flex flex-col gap-y-3 w-full"
            onSubmit={handleRegisterSubmit}
          >
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
                  onChange={handleRegisterInput}
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
                  onChange={handleRegisterInput}
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
                  onChange={handleRegisterInput}
                />
                {errors?.email && (
                  <p className="text-red-600">{errors.email}</p>
                )}
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
                  onChange={handleRegisterInput}
                />
                {errors?.password && (
                  <p className="text-red-600">{errors.password}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-bold text-xs">Role</p>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="superadmin"
                      value={"superadmin"}
                      onChange={handleRegisterInput}
                      className="h-5 w-5 appearance-none rounded-full border-4 border-solid border-[#E8E8E8] checked:border-secondary bg-white checked:bg-primary transition-all active:transform active:scale-110 duration-300 cursor-pointer"
                    />
                    <label htmlFor="superadmin">Super Admin</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="radio"
                      name="role"
                      id="customer"
                      value={"customer"}
                      onChange={handleRegisterInput}
                      className="h-5 w-5 appearance-none rounded-full border-4 border-solid border-[#E8E8E8] checked:border-secondary bg-white checked:bg-primary transition-all active:transform active:scale-110 duration-300 cursor-pointer"
                    />
                    <label htmlFor="customer">Customer</label>
                  </div>
                </div>
              </div>
            </div>
            <button
              disabled={!allFieldsFilled}
              className={clsx(
                "w-6/12 flex items-center py-2 px-4 bg-secondary hover:bg-white text-white hover:text-secondary border border-transparent font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition ease-in-out duration-300",
                {
                  "justify-normal": !registerMutate.isPending,
                  "justify-center": registerMutate.isPending,
                }
              )}
            >
              {registerMutate.isPending ? (
                <div className="loader" />
              ) : (
                "Gabung Sekarang"
              )}
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
