import React from 'react'

import Image from "next/image";
const Banner = () => {
  return (
    <div className='relative'>
        <Image
        src="https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/bgimage.jpg?alt=media&token=c31d1614-351f-42b7-bf1e-f56f8fbfc342"
        alt="Southern Cross Smash Repairs Banner"
        width={1920}
        height={600}
        className="w-full h-auto object-cover"
        />
      <div className="absolute inset-0 bg-black opacity-35 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
          Southern Cross Smash Repairs
        </h1>
      </div>

    </div>
  )
}

export default Banner