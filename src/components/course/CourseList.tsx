"use client";

import { useEffect, useMemo, useState } from "react";
import { getCourses } from "@/lib/courseStorage";
import CourseCard from "./CourseCard";
import { Course } from "@/data/courses";

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState<Course[]>([]);
  useEffect(() => {
    setCourseData(getCourses());
    }, []);
  

  const itemsPerPage = 8;

const filteredCourses = useMemo(() => {
  let data = [...courseData];

  // Search
  if (search) {
    data = data.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase())
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
}, [courseData, search, category, sort]);
const totalPages = Math.ceil(
  filteredCourses.length / itemsPerPage
);

const paginatedCourses = filteredCourses.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);
  return (
    <>
      {/* Controls */}
      <div className="mb-8 grid gap-4 md:grid-cols-3">

        <input
          type="text"
          placeholder="Search course..."
          className="input input-bordered w-full"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
            }}
        />

        <select
          className="select select-bordered"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
            }}
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
          onChange={(e) => {
            setSort(e.target.value);
            setCurrentPage(1);
            }}
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

        {paginatedCourses.map((course) => (
        <CourseCard
            key={course.id}
            course={course}
        />
        ))}

      </div>
      <div className="mt-10 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn ${
                currentPage === index + 1
                ? "btn-primary"
                : "btn-outline"
            }`}
            >
            {index + 1}
            </button>
        ))}
        </div>
    </>
  );
}