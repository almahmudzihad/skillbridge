"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import useAuth from "@/hooks/useAuth";
import { loginSchema, LoginFormData } from "@/lib/loginSchema";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  const { loginUser, googleLogin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await loginUser(data.email, data.password);

      toast.success("Login Successful!");

      router.push("/");
    } catch (error: any) {
      toast.error("Invalid email or password");
    }
  };

  
  const handleGoogleLogin = async () => {
  try {
    await googleLogin();

    toast.success("Google Login Successful!");

    router.push("/");
  } catch (error) {
    console.error(error);
    toast.error("Google Login Failed");
  }
};

  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body">

        <h2 className="text-center text-3xl font-bold">
          Welcome Back
        </h2>

        <p className="mb-6 text-center text-base-content/70">
          Login to continue your learning journey.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Email */}

          <div>
            <label className="label">
              <span className="label-text">
                Email
              </span>
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full"
              {...register("email")}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-error">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="label">
              <span className="label-text">
                Password
              </span>
            </label>

            <input
              type="password"
              placeholder="********"
              className="input input-bordered w-full"
              {...register("password")}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-error">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="divider">OR</div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full"
          >
            <FcGoogle size={22} />
            Continue with Google
          </button>

        

        <p className="mt-6 text-center">
          Don't have an account?

          <Link
            href="/register"
            className="ml-2 font-semibold text-primary"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}