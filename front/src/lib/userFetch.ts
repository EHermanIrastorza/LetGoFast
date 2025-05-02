import { Iregister } from "@/interface/registerInterface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function registerUser(userData: Iregister): Promise<Iregister> {
    try {
        const res = await fetch(`${APIURL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        if (!res.ok) {
            throw new Error("Failed to register user");
        }
        const user: Iregister = await res.json();
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
