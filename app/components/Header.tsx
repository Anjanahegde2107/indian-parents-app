"use client"; // Ensures it's a client component

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Brand Name (Instead of Logo) */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-bold text-blue-900">
            OpportunityFinder
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-900 hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold text-gray-900 hover:text-blue-600">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 right-0 z-50 w-64 bg-white px-6 py-6 shadow-lg sm:ring-1 sm:ring-gray-900/10">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold text-gray-900">
                OpportunityFinder
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="mt-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-100"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on selection
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Login Button for Mobile */}
              <div className="py-6">
                <Link
                  href="/login"
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
