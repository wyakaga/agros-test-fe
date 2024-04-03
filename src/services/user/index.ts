import { useMutation, useQuery } from "@tanstack/react-query";

import IController from "@/interfaces/controller.interface";
import { deleteUser, showAll, updateProfile } from "./https";
import { IUpdateUserReq } from "@/interfaces/requests/user.interface";

export const useShowAllQuery = (token: string, controller: IController) => {
  return useQuery({
    queryKey: ["user", "all"],
    queryFn: () => showAll(token, controller),
    enabled: !!token
  });
};

export const useUpdateProfileMutation = () => {
  return useMutation({
    mutationKey: ["user", "profile"],
    mutationFn: ({
      body,
      id,
      token,
      controller,
    }: {
      body: IUpdateUserReq;
      id: string;
      token: string | undefined;
      controller: IController;
    }) => updateProfile(body, id, token, controller),
  });
};

export const useDeleteUserMutation = () => {
  return useMutation({
    mutationKey: ["user", "delete"],
    mutationFn: ({
      id,
      token,
      controller,
    }: {
      id: string;
      token: string | undefined;
      controller: IController;
    }) => deleteUser(id, token, controller),
  });
};
