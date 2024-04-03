"use client";

import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import clsx from "clsx";
import { useDispatch } from "react-redux";

import Input from "@/components/UI/Input";
import UserStory from "@/components/UserStory";
import { useAppSelector } from "@/redux/hooks";
import { useUpdateProfileMutation } from "@/services/user";
import { userAction } from "@/redux/slices/user.slice";
import { IsNotAuthenticated } from "@/components/RequireAuth";

const Profile = () => {
  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  const email = useAppSelector((state) => state.user.email);
  const id = useAppSelector((state) => state.user.id);
  const token = useAppSelector((state) => state.auth.token);

  const controller = useMemo(() => new AbortController(), []);

  const updateProfileMutate = useUpdateProfileMutation();

  const [profileForm, setProfileForm] = useState({
    fullName: "",
    city: "",
    password: "",
  });

  const handleProfileInput = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };

  const handleProfileSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateProfileMutate.mutate(
      {
        body: profileForm,
        id,
        token,
        controller,
      },
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries({
            queryKey: ["user", "all"],
          });
          dispatch(userAction.assignName(data.fullName));
          toast.success("Profil berhasil diperbarui");
        },
      }
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center py-20 lg:px-24 px-10 gap-y-16">
      <section className="flex flex-col gap-y-3 w-full bg-white rounded-[10px] p-8">
        <h2 className="font-bold text-[2rem]">Perbarui Profil</h2>
        <form
          className="flex flex-col gap-y-3 w-full"
          onSubmit={handleProfileSubmit}
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
                placeholder="Contoh: Bambang"
                onChange={handleProfileInput}
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
                placeholder="Contoh: Pekalongan"
                onChange={handleProfileInput}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="email"
                className="font-bold text-[#E8E8E8] text-xs"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                disabled
                placeholder={email}
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
                placeholder="******"
                onChange={handleProfileInput}
              />
            </div>
          </div>
          <button
            className={clsx(
              "w-6/12 flex items-center py-2 px-4 bg-secondary hover:bg-white text-white hover:text-secondary border border-transparent font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition ease-in-out duration-300",
              {
                "justify-normal": !updateProfileMutate.isPending,
                "justify-center": updateProfileMutate.isPending,
              }
            )}
          >
            {updateProfileMutate.isPending ? (
              <div className="loader" />
            ) : (
              "Perbarui Sekarang"
            )}
          </button>
        </form>
      </section>
      <UserStory />
    </main>
  );
};

const ProfileGuarded = () => {
  return (
    <IsNotAuthenticated>
      <Profile />
    </IsNotAuthenticated>
  );
};

export default ProfileGuarded;
