import React from 'react'

const Banner = ({ pagetitle }) => {
  return (
    <div className="relative overflow-hidden h-[420px] md:h-[500px]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxir1apeg/image/upload/v1774572253/bgimage_pe3d1t.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Multi-layer dark overlay for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" aria-hidden="true" />

      {/* Bottom edge fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Decorative top line */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 bg-yellow-500" />
          <span className="text-yellow-400 text-xs font-bold tracking-[0.3em] uppercase">
            Southern Cross Smash Repairs
          </span>
          <div className="h-px w-12 bg-yellow-500" />
        </div>

        {/* Page title */}
        <h1 className="text-white text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight uppercase">
          {pagetitle}
        </h1>

        {/* Yellow underline accent */}
        <div className="mt-5 w-20 h-1 bg-yellow-500 rounded-full" />

      </div>

      {/* Subtle bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

    </div>
  )
}

export default Banner
