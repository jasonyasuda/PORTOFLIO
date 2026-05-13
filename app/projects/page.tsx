import Link from "next/link";

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top banner */}
      <section className="h-1/2 overflow-hidden bg-black text-white flex items-center">
        <div className="whitespace-nowrap animate-scroll text-5xl font-semibold">
          <span className="mx-12">Projects</span>
          <span className="mx-12">UI Design</span>
          <span className="mx-12">Web Apps</span>
          <span className="mx-12">Experiments</span>
          <span className="mx-12">Projects</span>
          <span className="mx-12">UI Design</span>
          <span className="mx-12">Web Apps</span>
          <span className="mx-12">Experiments</span>
        </div>
      </section>

      {/* Bottom content */}
      <section className="flex-1 relative p-10">
        <div className="absolute bottom-8 left-8">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-none">
            My 
          </h1>
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 leading-none mb-6">
            Projects
          </h1>

          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            This page will showcase my work and experiments using Next.js.
          </p>

          <div className="flex gap-4">
            <Link
              href="/"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition"
            >
              Home
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}