import CourseList from "@/components/course/CourseList";

export default function ExplorePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="mb-10 text-center text-4xl font-bold">
        Explore Courses
      </h1>

      <CourseList />
    </main>
  );
}