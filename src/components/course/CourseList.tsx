"use client";

import { useMemo, useState } from "react";
import { courses } from "@/data/courses";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredCourses = useMemo(() => {
    let data = [...courses];

    // Search
    if (search) {
      data = data.filter((course) =>
        course.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category Filter
    if (category !== "All") {
      data = data.filter(
        (course) => course.category === category
      );
    }

    // Sort
    if (sort === "price-low") {
      data.sort((a, b) => a.price - b.price);
    }

    if (sort === "price-high") {
      data.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    return data;
  }, [search, category, sort]);

  return (
    <>
      {/* Controls */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Search course..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="select select-bordered"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option>All</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Programming</option>
          <option>Database</option>
          <option>Design</option>
        </select>

        <select
          className="select select-bordered"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">Sort By</option>
          <option value="price-low">
            Price Low → High
          </option>

          <option value="price-high">
            Price High → Low
          </option>

          <option value="rating">
            Highest Rating
          </option>
        </select>

      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>
    </>
  );
}