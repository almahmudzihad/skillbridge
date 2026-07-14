import Image from "next/image";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import CourseCard from "@/components/course/CourseCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CourseDetailsPage({ params }: Props) {
  const { id } = await params;

  const course = courses.find(
    (item) => item.id === Number(id)
  );

  if (!course) {
    notFound();
  }

  const relatedCourses = courses.filter(
    (item) =>
      item.category === course.category &&
      item.id !== course.id
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">

      {/* Images */}
      <div className="grid gap-4 md:grid-cols-2">

        <div className="relative h-96">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="grid gap-4">

          <div className="relative h-44">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="relative h-44">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="rounded-xl object-cover"
            />
          </div>

        </div>

      </div>

      {/* Content */}

      <div className="mt-10">

        <h1 className="text-4xl font-bold">
          {course.title}
        </h1>

        <p className="mt-5 text-lg">
          {course.description}
        </p>

      </div>

      {/* Key Info */}

      <div className="grid md:grid-cols-4 gap-6 mt-10">

        <div className="stat shadow rounded-xl">
          <div className="stat-title">
            Price
          </div>

          <div className="stat-value text-primary">
            ${course.price}
          </div>
        </div>

        <div className="stat shadow rounded-xl">
          <div className="stat-title">
            Rating
          </div>

          <div className="stat-value">
            ⭐ {course.rating}
          </div>
        </div>

        <div className="stat shadow rounded-xl">
          <div className="stat-title">
            Duration
          </div>

          <div className="stat-value text-lg">
            {course.duration}
          </div>
        </div>

        <div className="stat shadow rounded-xl">
          <div className="stat-title">
            Instructor
          </div>

          <div className="stat-value text-lg">
            {course.instructor}
          </div>
        </div>

      </div>

      {/* Reviews */}

      <div className="mt-14">

        <h2 className="text-3xl font-bold mb-6">
          Student Reviews
        </h2>

        <div className="bg-base-200 rounded-xl p-6">

          <p className="italic">
            ⭐⭐⭐⭐⭐ Excellent course with hands-on
            projects and real-world examples.
          </p>

          <p className="mt-3 font-semibold">
            — Alex Johnson
          </p>

        </div>

      </div>

      {/* Related */}

      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Related Courses
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {relatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>

    </main>
  );
}