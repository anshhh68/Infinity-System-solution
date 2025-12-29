'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#101622]/95 backdrop-blur-md transition-all">
      <div className="px-4 md:px-10 lg:px-40 flex justify-center py-3">
        <div className="flex max-w-[1280px] w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white group">
            <div className="size-8 flex items-center justify-center text-[#135bec] transition-transform group-hover:scale-110">
              <span className="material-symbols-outlined text-3xl">all_inclusive</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-tight">Infinity System Solution</h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive(link.href)
                      ? 'text-[#135bec] font-bold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-[#135bec]'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#135bec] rounded-full" />
                  )}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="flex items-center justify-center rounded-lg h-10 px-6 bg-[#135bec] hover:bg-blue-700 transition-all text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-900 dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101622] px-4 py-4 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'bg-[#135bec]/10 text-[#135bec] font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center rounded-lg h-12 px-6 bg-[#135bec] hover:bg-blue-700 transition-colors text-white text-sm font-bold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
