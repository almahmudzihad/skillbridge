import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function ManageCoursePage() {
  return (
    <ProtectedRoute>
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">
          Manage Courses
        </h1>

        <p className="mt-4">
          This page is protected.
        </p>
      </div>
    </ProtectedRoute>
  );
}