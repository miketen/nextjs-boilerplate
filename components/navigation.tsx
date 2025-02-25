'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (<nav className="flex items-center justify-between flex-wrap">
    <div className="w-full block flex-grow flex lg:items-center">
      <div className="text-lg">
        <Link href="/" className={`block mt-4 inline-block text-black hover:font-semibold mr-4 ${pathname === '/' ? 'font-semibold' : ''}`}>
          Giphy
        </Link>
        <Link href="/weather" className={`block mt-4 inline-block text-black hover:font-semibold mr-4  ${pathname === '/weather' ? 'font-semibold' : ''}`}>
          Weather
        </Link>
      </div>
    </div>
  </nav>);
}
