"use client";

import {
  BarChart,
  Bar,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Jan",
    students: 120,
  },
  {
    month: "Feb",
    students: 180,
  },
  {
    month: "Mar",
    students: 250,
  },
  {
    month: "Apr",
    students: 320,
  },
  {
    month: "May",
    students: 410,
  },
  {
    month: "Jun",
    students: 520,
  },
];

export default function Statistics() {
  return (
    <section className="bg-base-200 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Platform Statistics
          </h2>

          <p className="mt-3 text-base-content/70">
            Our growing learning community.
          </p>
        </div>

        {/* Cards */}

        <div className="mb-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="stat rounded-xl bg-base-100 shadow">
            <div className="stat-title">Students</div>
            <div className="stat-value text-primary">10K+</div>
          </div>

          <div className="stat rounded-xl bg-base-100 shadow">
            <div className="stat-title">Courses</div>
            <div className="stat-value text-secondary">
              120+
            </div>
          </div>

          <div className="stat rounded-xl bg-base-100 shadow">
            <div className="stat-title">Mentors</div>
            <div className="stat-value text-accent">
              35+
            </div>
          </div>

          <div className="stat rounded-xl bg-base-100 shadow">
            <div className="stat-title">
              Success Rate
            </div>
            <div className="stat-value text-success">
              98%
            </div>
          </div>

        </div>

        {/* Chart */}

        <div className="rounded-xl bg-base-100 p-6 shadow">

          <ResponsiveContainer
            width="100%"
            height={350}
          >
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="students"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>
    </section>
  );
}