import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

import { ILoginReq, IRegisterReq } from "@/interfaces/requests/auth.interface";
import IController from "@/interfaces/controller.interface";
import {
  ILoginErrRes,
  IRegisterErrRes,
} from "@/interfaces/responses/auth.interface";
import { login, register } from "./http";

export const useRegisterMutation = () => {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: ({
      body,
      controller,
    }: {
      body: IRegisterReq;
      controller: IController;
    }) => register(body, controller),
    onError: (err: AxiosError) => {
      let errObj: IRegisterErrRes = JSON.parse(
        JSON.stringify(err.response?.data)
      );
      console.log(errObj);
    },
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: ({
      body,
      controller,
    }: {
      body: ILoginReq;
      controller: IController;
    }) => login(body, controller),
    onError: (err: AxiosError) => {
      let errObj: ILoginErrRes = JSON.parse(JSON.stringify(err.response?.data));
      if (
        errObj.errors.email === "Didn't match" &&
        errObj.errors.password === "Didn't match"
      ) {
        toast.error("Email atau password salah");
      }
    },
  });
};
