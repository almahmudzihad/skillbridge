export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Complete React Development",
    category: "Frontend",
    instructor: "John Smith",
    price: 49,
    rating: 4.8,
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
    description: "Master React.js from beginner to advanced level."
  },

  {
    id: 2,
    title: "Node.js & Express",
    category: "Backend",
    instructor: "David Wilson",
    price: 59,
    rating: 4.7,
    duration: "10 Weeks",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
    description: "Build scalable backend applications."
  },

  {
    id: 3,
    title: "UI UX Design",
    category: "Design",
    instructor: "Emma Watson",
    price: 39,
    rating: 4.6,
    duration: "6 Weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
    description: "Learn modern UI/UX design principles."
  },

  {
    id: 4,
    title: "TypeScript Masterclass",
    category: "Programming",
    instructor: "Michael Lee",
    price: 69,
    rating: 4.9,
    duration: "9 Weeks",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
    description: "Become confident with TypeScript."
  },

  {
    id: 5,
    title: "Next.js Full Course",
    category: "Frontend",
    instructor: "Sarah Parker",
    price: 79,
    rating: 4.9,
    duration: "12 Weeks",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    description: "Build production-ready applications using Next.js."
  },

  {
    id: 6,
    title: "MongoDB Bootcamp",
    category: "Database",
    instructor: "Alex Brown",
    price: 45,
    rating: 4.7,
    duration: "7 Weeks",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
    description: "Learn MongoDB from scratch."
  },

  {
    id: 7,
    title: "Python for Beginners",
    category: "Programming",
    instructor: "Robert King",
    price: 35,
    rating: 4.5,
    duration: "5 Weeks",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600",
    description: "Start programming with Python."
  },

  {
    id: 8,
    title: "Advanced JavaScript",
    category: "Programming",
    instructor: "Sophia Adams",
    price: 55,
    rating: 4.8,
    duration: "8 Weeks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
    description: "Deep dive into modern JavaScript."
  }
];