import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Jason Yasuda</h1>
      <p>Welcome to my portfolio website built with Next.js.</p>

      <Link href="/about">Go to About Page</Link>
    </main>
  );
}
