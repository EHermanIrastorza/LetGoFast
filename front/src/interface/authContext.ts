import { IUser } from "./userInterface";

export interface IAuthContext {
    user: IUser | null;
    login: (userData: IUser, token: string) => void;
    logout: () => void;
    token: string | null;
  }