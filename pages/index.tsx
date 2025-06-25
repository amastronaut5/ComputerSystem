import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-blue-900 to-purple-900 text-white">
      <h1 className="text-5xl font-bold mb-6 text-center drop-shadow-lg">
        Computer System Vision
      </h1>
      <p className="text-xl mb-10 max-w-2xl text-center font-mono">
        Master the machine — from atoms to API calls. Explore the architecture, programming, OS, networking, algorithms, and discrete structures that power every modern computer system.
      </p>
      <nav className="flex flex-col gap-4">
        <Link href="/map" className="px-8 py-3 rounded bg-blue-700 hover:bg-blue-800 shadow-lg text-xl font-semibold transition">
          Explore the Knowledge Map
        </Link>
        <Link href="/playlists" className="px-8 py-3 rounded bg-purple-700 hover:bg-purple-800 shadow-lg text-xl font-semibold transition">
          View Playlists & References
        </Link>
        <Link href="/quiz" className="px-8 py-3 rounded bg-green-700 hover:bg-green-800 shadow-lg text-xl font-semibold transition">
          Test Your Knowledge
        </Link>
      </nav>
      <footer className="mt-14 text-gray-400 text-sm">
        Inspired by CS50, Nand2Tetris, OSTEP, and the open web.
      </footer>
    </main>
  );
}