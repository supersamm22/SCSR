import React from 'react'

import Image from "next/image";
const Banner = (pagetitle) => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] h-[500px] bg-[url('https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/bgimage4.webp?alt=media&token=c7d4cdcc-edd4-4863-8306-ba208f8ece4d')]">
      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.75)]">
        </div>
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
            {pagetitle.pagetitle}
          </h1>
          </div>
        </div>
    </div>
  )
}

export default Banner