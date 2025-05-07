import { Iregister } from "@/interface/registerInterface";
import { Ilogin} from "@/interface/userInterface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(userData: Iregister): Promise<Ilogin> {
    try {
        const res = await fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!res.ok) {
            throw new Error("Failed to register user, password or email unvalid");
        }
        const user: Ilogin = await res.json();
        console.log("user", user);
        return user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}

export async function loginUser(userData: Iregister): Promise<Ilogin> {
    try {
        const res = await fetch(`${APIURL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!res.ok) {
            throw new Error("Failed to login user");
        }
        const user: Ilogin = await res.json();
        console.log("user", user);
        return user;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error("An unknown error occurred");
        }
    }
}