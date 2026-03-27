import { FiMapPin } from 'react-icons/fi';

const ContactCard = ({ name, location, suburb, image }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">

      {/* Card Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={`${name} location`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Yellow accent bar at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-500" />
      </div>

      {/* Card Body */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <div className="flex items-start gap-2.5 text-gray-500">
          <FiMapPin className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" aria-hidden="true" />
          <div className="text-sm leading-relaxed">
            <p>{location}</p>
            <p>{suburb}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactCard;
