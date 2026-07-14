"use client";

import { addCourse } from "@/lib/courseStorage";
import {
  courseSchema,
  CourseFormData,
} from "@/lib/courseSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import AdminRoute from "@/components/auth/AdminRoute";

export default function AddCoursePage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
  });

  const onSubmit = (data: CourseFormData) => {
    addCourse({
      id: Date.now(),
      ...data,
    });

    toast.success("Course Added Successfully");

    reset();

    router.push("/items/manage");
  };

  return (
    <AdminRoute>
      <main className="mx-auto max-w-3xl px-4 py-12">

        <div className="card bg-base-100 shadow-xl border">

          <div className="card-body">

            <h1 className="text-3xl font-bold mb-6">
              Add New Course
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Title */}

              <div>

                <label className="label">
                  <span className="label-text">
                    Course Title
                  </span>
                </label>

                <input
                  {...register("title")}
                  type="text"
                  className="input input-bordered w-full"
                />

                {errors.title && (
                  <p className="text-error text-sm mt-1">
                    {errors.title.message}
                  </p>
                )}

              </div>

              {/* Category */}

              <div>

                <label className="label">
                  <span className="label-text">
                    Category
                  </span>
                </label>

                <select
                  {...register("category")}
                  className="select select-bordered w-full"
                >
                  <option value="">Select Category</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Programming">Programming</option>
                  <option value="Database">Database</option>
                  <option value="Design">Design</option>
                </select>

                {errors.category && (
                  <p className="text-error text-sm mt-1">
                    {errors.category.message}
                  </p>
                )}

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Instructor */}

                <div>

                  <label className="label">
                    <span className="label-text">
                      Instructor
                    </span>
                  </label>

                  <input
                    {...register("instructor")}
                    type="text"
                    className="input input-bordered w-full"
                  />

                  {errors.instructor && (
                    <p className="text-error text-sm mt-1">
                      {errors.instructor.message}
                    </p>
                  )}

                </div>

                {/* Duration */}

                <div>

                  <label className="label">
                    <span className="label-text">
                      Duration
                    </span>
                  </label>

                  <input
                    {...register("duration")}
                    type="text"
                    placeholder="8 Weeks"
                    className="input input-bordered w-full"
                  />

                  {errors.duration && (
                    <p className="text-error text-sm mt-1">
                      {errors.duration.message}
                    </p>
                  )}

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                {/* Price */}

                <div>

                  <label className="label">
                    <span className="label-text">
                      Price
                    </span>
                  </label>

                  <input
                    {...register("price", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    className="input input-bordered w-full"
                  />

                  {errors.price && (
                    <p className="text-error text-sm mt-1">
                      {errors.price.message}
                    </p>
                  )}

                </div>

                {/* Rating */}

                <div>

                  <label className="label">
                    <span className="label-text">
                      Rating
                    </span>
                  </label>

                  <input
                    {...register("rating", {
                      valueAsNumber: true,
                    })}
                    type="number"
                    step="0.1"
                    className="input input-bordered w-full"
                  />

                  {errors.rating && (
                    <p className="text-error text-sm mt-1">
                      {errors.rating.message}
                    </p>
                  )}

                </div>

              </div>

              {/* Image */}

              <div>

                <label className="label">
                  <span className="label-text">
                    Image URL
                  </span>
                </label>

                <input
                  {...register("image")}
                  type="url"
                  className="input input-bordered w-full"
                />

                {errors.image && (
                  <p className="text-error text-sm mt-1">
                    {errors.image.message}
                  </p>
                )}

              </div>

              {/* Description */}

              <div>

                <label className="label">
                  <span className="label-text">
                    Description
                  </span>
                </label>

                <textarea
                  {...register("description")}
                  rows={5}
                  className="textarea textarea-bordered w-full"
                />

                {errors.description && (
                  <p className="text-error text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}

              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Add Course
              </button>

            </form>

          </div>

        </div>

      </main>
    </AdminRoute>
  );
}