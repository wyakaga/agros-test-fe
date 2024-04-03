import IController from "@/interfaces/controller.interface";
import { ILoginReq, IRegisterReq } from "@/interfaces/requests/auth.interface";
import { ILoginRes } from "@/interfaces/responses/auth.interface";
import api from "../base";

export const register = async (body: IRegisterReq, controller: IController) => {
  const config = { signal: controller.signal };
  const response = await api.post("/auth/register", body, config);
  return response.data;
};

export const login = async (
  body: ILoginReq,
  controller: IController
): Promise<ILoginRes> => {
  const config = { signal: controller.signal };
  const response = await api.post("/auth/login", body, config);
  return response.data;
};
