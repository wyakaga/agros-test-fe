export interface ILoginRes {
  token: string;
  tokenExpires: number;
  user: {
    id: string;
    fullName: string;
    city: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: null | string;
    deletedAt: null | string;
  };
}

export interface ILoginErrRes {
  status: number;
  errors: {
    email: string;
    password: string;
  };
}

export interface IRegisterErrRes {
  status: number;
  errors: {
    fullName: string;
    city: string;
    email: string;
    password: string;
    role: string;
  };
}
