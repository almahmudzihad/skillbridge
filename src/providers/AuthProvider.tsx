"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

import {
  ReactNode,
  useEffect,
  useState,
} from "react";

import { auth } from "@/firebase/firebase.config";
import {
  AuthContext,
} from "@/context/AuthContext";

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);

  const [loading, setLoading] =
    useState(true);

  const createUser = (
    email: string,
    password: string
  ) => {
    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const loginUser = (
    email: string,
    password: string
  ) => {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    createUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}