import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top scrolling banner */}
      <section className="h-1/2 overflow-hidden bg-black text-white flex items-center">
        <div className="whitespace-nowrap animate-scroll text-5xl font-semibold">
          <span className="mx-12">About Me</span>
          <span className="mx-12">Student</span>
          <span className="mx-12">Frontend Developer</span>
          <span className="mx-12">UI/UX Enthusiast</span>
          <span className="mx-12">About Me</span>
          <span className="mx-12">Student</span>
          <span className="mx-12">Frontend Developer</span>
          <span className="mx-12">UI/UX Enthusiast</span>
        </div>
      </section>

      {/* Bottom content */}
      <section className="flex-1 relative p-10">
        <div className="absolute bottom-8 left-8 max-w-2xl">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-none">
            About
          </h1>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-none mb-6">
            Me
          </h1>

          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Hello! My name is Jason Yasuda. I am interested in web development,
            design, and building interactive digital experiences using Next.js.
          </p>

          <Link
            href="/"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
          >
            Home
          </Link>
        </div>
      </section>
    </main>
  );
}