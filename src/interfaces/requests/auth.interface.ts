export interface IRegisterReq {
  fullName: string;
  city: string;
  email: string;
  password: string;
  role: string;
}

export interface ILoginReq {
  email: string;
  password: string;
}
