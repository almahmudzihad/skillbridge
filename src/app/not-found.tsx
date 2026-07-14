import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-primary">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-md text-base-content/70">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">

          <Link
            href="/"
            className="btn btn-primary"
          >
            Go Home
          </Link>

          <Link
            href="/explore"
            className="btn btn-outline"
          >
            Explore Courses
          </Link>

        </div>

      </div>

    </main>
  );
}