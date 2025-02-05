"use client"; // Ensures this is a client component

import { useState } from "react";
import Image from "next/image"; // Use next/image for optimized image loading

// Define the testimonial data structure
interface Testimonial {
  body: string;
  author: {
    name: string;
    handle: string;
    imageUrl: string;
  };
}

const testimonials: Testimonial[] = [
  {
    body: "The guidance we received was invaluable. Our daughter is now pursuing her dream career in medicine.",
    author: {
      name: "Priya Sharma",
      handle: "priyasharma",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "We were confused about our son's career path, but the personalized counseling helped us make the right decision.",
    author: {
      name: "Rahul Patel",
      handle: "rahulpatel",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    body: "The comprehensive assessment opened our eyes to career options we hadn't even considered for our child.",
    author: {
      name: "Anita Desai",
      handle: "anitadesai",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState<number | null>(null); // Explicitly type useState

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from satisfied parents
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author.handle}
                className="flex-1"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <figure
                  className={`rounded-2xl bg-gray-50 p-8 text-sm leading-6 transition-all duration-300 ${
                    isHovered === index ? "shadow-lg transform scale-105" : "shadow-md"
                  }`}
                >
                  <blockquote className="text-gray-900">
                    <p>{`"${testimonial.body}"`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      width={40}
                      height={40}
                      unoptimized // Allows external images without configuration
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}