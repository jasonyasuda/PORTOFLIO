export default function About() {
  return(
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>

        <p className="text-gray-600 mb-6">
          Hello! My name is Jason Yasuda. This portfolio was built using
          Next.js and deployed with GitHub Pages.
        </p>

        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back Home
        </Link>
      </div>
    </main>
    );
  }