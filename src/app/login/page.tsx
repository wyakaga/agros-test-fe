"use client";

import React, { ChangeEvent, FormEvent, useMemo, useState } from "react";

import Input from "@/components/UI/Input";
import UserStory from "@/components/UserStory";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/services/auth";
import clsx from "clsx";
import { authAction } from "@/redux/slices/auth.slice";
import { useAppDispatch } from "@/redux/hooks";

const Login = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const controller = useMemo(() => new AbortController(), []);

  const loginMutate = useLoginMutation();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const allFieldsFilled = Object.values(loginForm).every(
    (value) => value.trim() !== ""
  );

  const handleLoginInput = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    loginMutate.mutate(
      {
        body: loginForm,
        controller,
      },
      {
        onSuccess: (data) => {
          router.push("/");
          dispatch(authAction.assignRole(data.user.role));
          dispatch(authAction.assignToken(data.token));
        },
      }
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-20 px-24 gap-y-16">
      <section className="flex flex-col gap-y-6 w-full">
        <div className="flex flex-col gap-y-4 text-black">
          <h2 className="font-bold text-[2rem]">Masuk Sekarang</h2>
          <p>Masuk dan nikmati fitur kami</p>
        </div>
        <div className="flex flex-col gap-y-3">
          <form
            className="flex flex-col gap-y-3 w-full"
            onSubmit={handleLoginSubmit}
          >
            <div className="flex items-center gap-x-4 w-full">
              <div className="flex flex-col gap-y-2 w-6/12">
                <label htmlFor="email" className="font-bold text-xs">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="Contoh: bambang@gmail.com"
                  onChange={handleLoginInput}
                />
              </div>
              <div className="flex flex-col gap-y-2 w-6/12">
                <label htmlFor="password" className="font-bold text-xs">
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="password"
                  placeholder="******"
                  onChange={handleLoginInput}
                />
              </div>
            </div>
            <button
              disabled={!allFieldsFilled}
              className={clsx(
                "w-6/12 flex items-center py-2 px-4 bg-secondary hover:bg-white text-white hover:text-secondary border border-transparent font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition ease-in-out duration-300",
                {
                  "justify-normal": !loginMutate.isPending,
                  "justify-center": loginMutate.isPending,
                }
              )}
            >
              {loginMutate.isPending ? (
                <div className="loader" />
              ) : (
                "Masuk Sekarang"
              )}
            </button>
          </form>
        </div>
      </section>
      <UserStory />
    </main>
  );
};

export default Login;
