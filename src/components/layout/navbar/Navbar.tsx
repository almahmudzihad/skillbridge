"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Logo from "./Logo";
import useAuth from "@/hooks/useAuth";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logout Successful");
      router.push("/");
    } catch {
      toast.error("Logout Failed");
    }
  };

  const navItems = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/explore">Explore</Link>
      </li>

      <li>
        <Link href="/about">About</Link>
      </li>

      <li>
        <Link href="/contact">Contact</Link>
      </li>

      {user && (
        <>
          <li>
            <Link href="/items/add">Add Course</Link>
          </li>

          <li>
            <Link href="/items/manage">Manage Courses</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-base-100/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">
        <div className="navbar px-0">
          {/* Mobile Menu */}
          <div className="navbar-start">
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <Menu size={22} />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-56 rounded-box bg-base-100 p-2 shadow z-[100]"
              >
                {navItems}
              </ul>
            </div>

            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
              {navItems}
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end gap-2">
            {user ? (
              <>
                <span className="hidden md:block font-semibold">
                  {user.displayName || "User"}
                </span>

                <button
                  onClick={handleLogout}
                  className="btn btn-error btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-primary btn-sm"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="btn btn-outline btn-primary btn-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}