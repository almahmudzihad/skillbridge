"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData,} from "@/lib/registerSchema";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
    const { createUser, googleLogin } = useAuth();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });
    const onSubmit = async (data: RegisterFormData) => {
    try {
        await createUser(data.email, data.password);

        // const result = await createUser(
        //     data.email,
        //     data.password
        //     );

        //     await updateProfile(result.user, {
        //     displayName: data.name,
        //     });

            toast.success("Registration Successful!");

            router.push("/");
    } catch (error: any) {
        toast.error(error.message);
    }
    };
    const handleGoogleLogin = async () => {
      try {
        await googleLogin();

        toast.success("Registration Successful!");

        router.push("/");
      } catch (error) {
        console.error(error);
        toast.error("Google Sign Up Failed");
      }
    };
  return (
    <div className="card w-full max-w-md bg-base-100 shadow-2xl">
      <div className="card-body">

        <h2 className="text-3xl font-bold text-center">
          Create Account
        </h2>

        <p className="text-center text-base-content/70 mb-6">
          Join DevLaunch and start learning today.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          <div>
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>

            <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                {...register("name")}
                />

                {errors.name && (
                <p className="mt-1 text-sm text-error">
                    {errors.name.message}
                </p>
                )}
          </div>

          <div>
            <label className="label">
              <span className="label-text">Email</span>
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

          <div>
            <label className="label">
              <span className="label-text">Password</span>
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
                {...register("confirmPassword")}
                />

                {errors.confirmPassword && (
                <p className="mt-1 text-sm text-error">
                    {errors.confirmPassword.message}
                </p>
                )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            >
            Register
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