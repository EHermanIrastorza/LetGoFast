export interface IUser {
    id: string;
    name: string;
    email: string;
    credictCard: string;
    city: string;
}

export interface Ilogin{
    user:IUser;
    token:string;
}