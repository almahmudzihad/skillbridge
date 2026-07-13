import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function AddCoursePage() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">
          Add Course
        </h1>

        <p className="mt-4">
          This page is protected.
        </p>
      </div>
    </ProtectedRoute>
  );
}