"use client";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";

import {
  ReactNode,
  useEffect,
  useState,
} from "react";

import { auth, googleProvider } from "@/firebase/firebase.config";
import { AuthContext } from "@/context/AuthContext";

export default function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Register
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

  // Login
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

  // Google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logoutUser = () => {
    return signOut(auth);
  };

  // Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}