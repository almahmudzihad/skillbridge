"use client";

import { createContext } from "react";
import { User, UserCredential } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  loading: boolean;

  createUser: (
    email: string,
    password: string
  ) => Promise<UserCredential>;

  loginUser: (
    email: string,
    password: string
  ) => Promise<UserCredential>;

  googleLogin: () => Promise<UserCredential>;

  logoutUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);