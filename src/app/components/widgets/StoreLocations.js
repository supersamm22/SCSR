import ContactCard from './ContactCard';

const contacts = [
  {
    name: 'Gregory Hills',
    location: '2/37 Rodeo Road',
    suburb: 'Gregory Hills, NSW 2557',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572401/gregoryhills_s2hwbj.png',
  },
  {
    name: 'Moss Vale',
    location: '10B McCourt Road',
    suburb: 'Moss Vale, NSW 2577',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572264/mossvale_gopcte.jpg',
  },
  {
    name: 'Goulburn',
    location: '1/135 Finlay Road',
    suburb: 'Goulburn, NSW 2580',
    image: 'https://res.cloudinary.com/dxir1apeg/image/upload/v1774572256/Goulburn_gyfccg.jpg',
  },
];

export default function StoreLocations() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-yellow-500" />
            <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase">Find Us</span>
            <div className="h-px w-10 bg-yellow-500" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Locations
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Three convenient locations across the Southern Highlands and surrounds — all delivering the same uncompromising standard of repair.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <ContactCard
              key={index}
              name={contact.name}
              location={contact.location}
              suburb={contact.suburb}
              image={contact.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
