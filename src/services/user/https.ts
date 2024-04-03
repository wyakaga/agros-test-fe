import IController from "@/interfaces/controller.interface";
import { IUser } from "@/interfaces/responses/user.interface";
import { IUpdateUserReq } from "@/interfaces/requests/user.interface";
import api from "../base";

export const showAll = async (
  token: string | undefined,
  controller: IController
): Promise<IUser[]> => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    signal: controller.signal,
  };
  const response = await api.get("/user", config);
  return response.data;
};

export const updateProfile = async (
  body: IUpdateUserReq,
  id: string,
  token: string | undefined,
  controller: IController
): Promise<IUser> => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    signal: controller.signal,
  };
  const response = await api.patch(`/user/${id}`, body, config);
  return response.data;
};

export const deleteUser = async (
  id: string,
  token: string | undefined,
  controller: IController
) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
    signal: controller.signal,
  };
  const response = await api.delete(`/user/${id}`, config);
  return response.data;
};
