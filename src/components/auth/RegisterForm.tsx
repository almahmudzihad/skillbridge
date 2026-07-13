"use client";

import Link from "next/link";

export default function RegisterForm() {
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body">

        <h2 className="text-3xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-center text-base-content/70 mb-6">
          Join DevLaunch and start learning today.
        </p>

        <form className="space-y-4">

          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Confirm Password
              </span>
            </label>

            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
            />
          </div>

          <button className="btn btn-primary w-full mt-4">
            Register
          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            href="/login"
            className="text-primary font-semibold ml-2"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}