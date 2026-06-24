// components/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-teal-700">
          WellnessPlatform
        </Link>
        <div className="space-x-6 text-sm font-medium text-slate-600">
          <Link href="/articles" className="hover:text-teal-700">Browse Articles</Link>
          <Link href="/about" className="hover:text-teal-700">About</Link>
        </div>
      </nav>
    </header>
  );
}