import dynamic from 'next/dynamic';
import Link from 'next/link';

const BridgeGraph = dynamic(() => import('../components/BridgeGraph'), { ssr: false });

export default function Map() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-6">Visual Knowledge Map</h1>
      <p className="mb-6 max-w-2xl">
        Explore the interconnected landscape of computer systems. Click each node to access learning materials, playlists, and exercises.
      </p>
      <div className="w-full h-[600px] bg-gray-900 rounded-xl shadow-xl overflow-hidden">
        <BridgeGraph />
      </div>
      <div className="mt-8">
        <Link href="/playlists" className="underline text-blue-400">Jump to Playlists & Resources →</Link>
      </div>
    </div>
  );
}
