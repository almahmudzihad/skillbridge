"use client";

import { createContext } from "react";
import { User } from "firebase/auth";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  createUser: (
    email: string,
    password: string
  ) => Promise<any>;
  loginUser: (
    email: string,
    password: string
  ) => Promise<any>;
  logoutUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);