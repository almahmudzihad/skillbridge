"use client";

import Image from "next/image";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import useAuth from "@/hooks/useAuth";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <main className="max-w-3xl mx-auto px-4 py-12">

        <div className="card bg-base-100 shadow-xl border">
          <div className="card-body items-center text-center">

            <img
                src={
                    user?.photoURL ||
                    "https://ui-avatars.com/api/?name=User"
                }
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border"
            />

            <h1 className="text-3xl font-bold mt-4">
              {user?.displayName || "User"}
            </h1>

            <p className="text-base-content/70">
              {user?.email}
            </p>

            <div className="divider"></div>

            <div className="w-full space-y-4">

              <div className="flex justify-between border rounded-lg p-4">
                <span className="font-semibold">
                  Role
                </span>

                <span>
                  {user?.email === "admin@gmail.com"
                    ? "Admin"
                    : "User"}
                </span>
              </div>

              <div className="flex justify-between border rounded-lg p-4">
                <span className="font-semibold">
                  Email Verified
                </span>

                <span>
                  {user?.emailVerified ? "Yes" : "No"}
                </span>
              </div>

              <div className="flex justify-between border rounded-lg p-4">
                <span className="font-semibold">
                  UID
                </span>

                <span className="truncate max-w-[180px]">
                  {user?.uid}
                </span>
              </div>

            </div>

          </div>
        </div>
        <div className="mt-6 flex gap-4">
        <a href="/explore" className="btn btn-primary">
            Explore Courses
        </a>

        <a href="/" className="btn btn-outline">
            Back Home
        </a>
        </div>

      </main>
    </ProtectedRoute>
  );
}