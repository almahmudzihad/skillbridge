import Image from "next/image";
import Link from "next/link";
import { Course } from "@/data/courses";

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="card bg-base-100 shadow-lg border hover:shadow-xl transition-all duration-300 h-full">
      {/* Image */}
      <figure className="relative h-52">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </figure>

      {/* Body */}
      <div className="card-body">

        <div className="badge badge-primary">
          {course.category}
        </div>

        <h2 className="card-title line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {course.description}
        </p>

        <div className="mt-3 space-y-2 text-sm">

          <div className="flex justify-between">
            <span>Instructor</span>
            <span>{course.instructor}</span>
          </div>

          <div className="flex justify-between">
            <span>Duration</span>
            <span>{course.duration}</span>
          </div>

          <div className="flex justify-between">
            <span>Rating</span>
            <span>⭐ {course.rating}</span>
          </div>

          <div className="flex justify-between">
            <span>Price</span>
            <span className="font-bold text-primary">
              ${course.price}
            </span>
          </div>

        </div>

        <div className="card-actions mt-5">
          <Link
            href={`/explore/${course.id}`}
            className="btn btn-primary w-full"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}