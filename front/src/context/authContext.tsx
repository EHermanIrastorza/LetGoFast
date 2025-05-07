"use client"
import { IAuthContext } from "@/interface/authContext";
import { IUser } from "@/interface/userInterface";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const storeUser = localStorage.getItem("user");
        const storeToken = localStorage.getItem("token");
        if (storeUser && storeToken) {
            setUser(JSON.parse(storeUser));
            setToken(storeToken);
        }
    },[])

     const login = (userData: IUser, token: string) => {
        setUser(userData);
        setToken(token);
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("token", token);
    }
 const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, token }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
 }
