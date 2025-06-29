import Image from 'next/image';

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    <Image
      src="/images/logo.png"
      alt="Southern Cross Smash Repairs Logo"
      width={200}
      height={100}
      className=""
    />

  </span>
);

export default Logo;