"use client";

import { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "react-responsive-modal";
import { useQueryClient } from "@tanstack/react-query";

import "react-responsive-modal/styles.css";

import { useAppSelector } from "@/redux/hooks";
import { useDeleteUserMutation, useShowAllQuery } from "@/services/user";

import Card from "./UI/Card";

function Partners() {
  const router = useRouter();

  const queryClient = useQueryClient();

  const deleteUserMutate = useDeleteUserMutation();

  const controller = useMemo(() => new AbortController(), []);

  const token = useAppSelector((state) => state.auth.token);
  const role = useAppSelector((state) => state.auth.role);

  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const mainRef = useRef(null);

  const onOpenModal = (id: string) => {
    setOpen(true);
    setId(id);
  };
  const onCloseModal = () => setOpen(false);

  const { data, isLoading } = useShowAllQuery(token, controller);

  const onDeleteUser = () => {
    deleteUserMutate.mutate(
      {
        id,
        token,
        controller,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["user", "all"],
          });
          setOpen(false);
        },
      }
    );
  };

  return (
    <section ref={mainRef} className="w-full flex flex-col gap-y-6 text-black">
      <h2 className="font-bold text-[2rem]">Mitra AGROS</h2>
      {token ? (
        <p>
          Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
          keamanan kepada para pelanggan setia AGROS Indonesia. Berikut
          merukapan daftar pelanggan setia kami.
        </p>
      ) : (
        <p>
          Kami berusaha semaksimal mungkin untuk memberikan kenyamanan dan
          keamanan kepada para pelanggan setia AGROS Indonesia.Untuk melihat
          daftar pelanggan kami, silakan melakukan pendaftaran.
        </p>
      )}
      <div className="flex justify-center items-center">
        {token ? (
          <div className="grid grid-cols-4 w-full gap-4">
            {isLoading
              ? Array.from({ length: 10 }).map((_, i) => <Card key={i} />)
              : data?.map((datum, i) => (
                  <Card
                    key={i}
                    name={datum.fullName}
                    city={datum.city}
                    role={role}
                    onOpenModal={() => onOpenModal(datum.id)}
                  />
                ))}
          </div>
        ) : (
          <button
            onClick={() => router.push("/register")}
            className="w-2/12 flex justify-center items-center py-1 px-1 border border-transparent bg-secondary text-primary rounded-[7px] focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-300"
          >
            Gabung Sekarang
          </button>
        )}
      </div>
      <Modal
        onClose={onCloseModal}
        open={open}
        center
        showCloseIcon={false}
        container={mainRef.current}
        classNames={{
          modal: "rounded-[10px]",
        }}
      >
        <div className="w-[40rem] flex justify-center items-center flex-col gap-y-8">
          <p className="font-semibold text-lg">Apakah Anda yakin?</p>
          <div className="flex w-full gap-x-4">
            <button
              onClick={onCloseModal}
              className="w-6/12 flex justify-center items-center py-2 px-4 bg-secondary hover:bg-white text-white hover:text-secondary border border-transparent hover:border-secondary font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition ease-in-out duration-300"
            >
              Tidak
            </button>
            <button
              onClick={onDeleteUser}
              className="w-6/12 flex justify-center items-center py-2 px-4 bg-red-600 hover:bg-white text-white hover:text-red-600 border border-transparent hover:border-red-600 font-bold text-lg rounded-[10px] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed transition ease-in-out duration-300"
            >
              Ya
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default Partners;
