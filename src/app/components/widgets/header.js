'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const trustItems = [
  { label: 'Est. 1966' },
  { label: '3 Locations' },
  { label: 'All Insurers Accepted' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Skip to content — accessibility for keyboard/screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-yellow-500 focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-gray-900"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 motion-reduce:transition-none ${
          scrolled ? 'shadow-lg shadow-gray-200/80' : 'shadow-sm'
        }`}
      >
        {/* Trust bar — "Trust & Authority" style: visible credentials above nav */}
        <div className="hidden sm:block bg-gray-50 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex items-center justify-between h-9">
              <div className="flex items-center gap-6">
                {trustItems.map((item, i) => (
                  <div key={item.label} className="flex items-center gap-6">
                    <span className="text-xs font-medium text-gray-500 tracking-wide">
                      {item.label}
                    </span>
                    {i < trustItems.length - 1 && (
                      <span className="w-px h-3 bg-gray-300" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
              <a
                href="tel:0246481013"
                className="text-xs font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-50 rounded"
              >
                (02) 4648 1013
              </a>
            </div>
          </div>
        </div>

        {/* Yellow accent line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent" aria-hidden="true" />

        {/* Main nav bar */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link
              href="/"
              aria-label="Southern Cross Smash Repairs — Home"
              className="flex-shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <Image
                src="/images/logo.png"
                alt="Southern Cross Smash Repairs"
                width={160}
                height={80}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative px-5 py-2 text-sm font-semibold rounded-md transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                      isActive ? 'text-yellow-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-yellow-500 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA + mobile hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-2.5 text-sm font-bold text-gray-900 hover:bg-yellow-400 active:bg-yellow-600 transition-colors duration-200 cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Hamburger — min 44×44px touch target */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="md:hidden inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile menu — ease-out enter, ease-in exit; motion-reduce disables animation */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="border-t border-gray-200 bg-white px-6 py-5">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {links.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-inset ${
                      isActive
                        ? 'text-yellow-600 bg-yellow-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" aria-hidden="true" />
                    )}
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile trust signals */}
            <div className="mt-5 pt-4 border-t border-gray-200 flex flex-wrap gap-x-4 gap-y-1">
              {trustItems.map((item) => (
                <span key={item.label} className="text-xs text-gray-400 font-medium">
                  {item.label}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full rounded-lg bg-yellow-500 px-5 py-3 text-sm font-bold text-gray-900 hover:bg-yellow-400 active:bg-yellow-600 transition-colors duration-200 cursor-pointer uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </header>

      {/* Landmark anchor for skip-to-content */}
      <div id="main-content" tabIndex={-1} className="outline-none" />
    </>
  );
};

export default Header;
