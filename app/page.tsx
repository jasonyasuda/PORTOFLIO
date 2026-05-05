import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          Jason Yasuda
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Welcome to my portfolio website built with Next.js.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            About Me
          </Link>

          <a
            href="https://github.com/jasonyasuda/PORTOFLIO"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
