'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (<nav className="flex items-center justify-between flex-wrap">
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <Link href="/" className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:font-semibold mr-4 ${pathname === '/' ? 'font-semibold' : ''}`}>
          Home
        </Link>
        <Link href="/weather" className={`block mt-4 lg:inline-block lg:mt-0 text-black hover:font-semibold mr-4  ${pathname === '/weather' ? 'font-semibold' : ''}`}>
          Weather
        </Link>
      </div>
    </div>
  </nav>);
}
