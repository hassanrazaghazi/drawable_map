'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(
  () => import('../components/Map'),
  {
    ssr: false,
    loading: () => <div className="w-full h-screen flex items-center justify-center">Loading map...</div>
  }
);

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Map />
    </div>
  );
}
