"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  "Digital Marketer",
  "Designer",
  "Developer",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Carousel Section */}
      <section className="h-1/2 overflow-hidden bg-black text-white flex items-center">
        <div className="whitespace-nowrap animate-scroll text-5xl font-semibold">
          <span className="mx-12">University of California San Diego</span>
          <span className="mx-12">Designer</span>
          <span className="mx-12">Developer</span>
          <span className="mx-12">Creative</span>
          <span className="mx-12">Digital Marketer</span>
          <span className="mx-12">Brand Strategist</span>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex-1 relative p-10">
        <div className="absolute bottom-8 left-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 leading-none">
            Jason
          </h1>
          <h1 className="text-8xl md:text-9xl font-bold text-gray-900 leading-none">
            Yasuda
          </h1>

          <div className="mt-6 flex gap-4">
            <Link
              href="/about"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              About
            </Link>

            <a
              href="https://github.com/jasonyasuda/PORTOFLIO"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
