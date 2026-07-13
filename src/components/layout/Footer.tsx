import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-primary">DevLaunch</h2>
            <p className="mt-4 text-gray-300">
              Learn modern technologies, build real-world projects, and launch
              your developer career.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/explore">Explore</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <p>Email: amzihad@gmail.com</p>
            <p>Phone: +880 1752533838</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>

            <div className="flex gap-4">
                <a href="#" className="hover:text-primary">
                    <FaFacebook size={22} />
                </a>

                <a href="#" className="hover:text-primary">
                    <FaGithub size={22} />
                </a>

                <a href="#" className="hover:text-primary">
                    <FaLinkedin size={22} />
                </a>
                </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} DevLaunch. All rights reserved.
        </div>
      </div>
    </footer>
  );
}