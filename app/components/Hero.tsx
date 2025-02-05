import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative isolate px-6 pt-14 lg:px-8 bg-cover bg-center bg-indigo-900"
    >
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        {/* Info Section */}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-yellow-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Discover the best options for your child&apos;s future.{" "}
            <Link
              href="/about"
              className="font-semibold text-yellow-600 hover:text-white"
              aria-label="Read more about the services"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Empowering Indian Parents for a Brighter Future
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            We help you navigate the best educational and career options for your child, ensuring they have every
            opportunity to succeed in life.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/get-started"
              className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              aria-label="Get started with your child's future"
            >
              Get started
            </Link>
            <Link
              href="/learn-more"
              className="text-sm font-semibold leading-6 text-white hover:text-yellow-600"
              aria-label="Learn more about our services"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
