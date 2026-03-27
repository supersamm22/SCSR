import React from 'react'

const services = [
  {
    title: 'Accident & Collision Repairs',
    description: 'Expert structural and cosmetic restoration after any accident, bringing your vehicle back to pre-accident condition.',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572359/carcrash2_kdbuxs.jpg',
  },
  {
    title: 'Panel Beating & Dent Removal',
    description: 'Precision panel beating and paintless dent removal to eliminate every dent, crease, and imperfection.',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572362/clark-van-der-beken-CSkriQWeTVs-unsplash_ex5jq4.jpg',
  },
  {
    title: 'Auto Painting & Refinishing',
    description: 'Factory-matched, flawless paint finishes using premium materials and professional spray booths.',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572359/carcrash2_kdbuxs.jpg',
  },
  {
    title: 'Insurance Claim Assistance',
    description: 'We liaise directly with all major insurers on your behalf, making the claims process seamless and stress-free.',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572362/clark-van-der-beken-CSkriQWeTVs-unsplash_ex5jq4.jpg',
  },
]

const ServiceCard = ({ title, description, image }) => (
  <div className="group relative overflow-hidden cursor-pointer bg-gray-900 shadow-xl">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-105"
      style={{ backgroundImage: `url("${image}")` }}
      aria-hidden="true"
    />

    {/* Gradient overlay — darkens on hover */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 transition-opacity duration-300 group-hover:opacity-90" />

    {/* Content */}
    <div className="relative flex flex-col justify-end h-80 p-6">
      {/* Yellow accent bar */}
      <div className="w-10 h-1 bg-yellow-500 rounded-full mb-4 transition-all duration-300 group-hover:w-16" />

      <h3 className="text-white text-xl font-bold leading-snug mb-3 tracking-wide uppercase">
        {title}
      </h3>

      {/* Description slides up on hover */}
      <p className="text-gray-300 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-300 ease-out group-hover:max-h-24 group-hover:opacity-100">
        {description}
      </p>

      {/* Arrow indicator */}
      <div className="flex items-center gap-2 mt-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">
          Learn More
        </span>
        <svg
          className="w-4 h-4 text-yellow-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </div>
)

const Services = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 md:mb-16">
          <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="text-gray-900 text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-yellow-500 rounded-full mb-5" />
          <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed">
            From minor dents to major collision damage, we deliver quality workmanship and outstanding results every time.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
