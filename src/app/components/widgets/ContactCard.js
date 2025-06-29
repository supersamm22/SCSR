import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactCard = ({ name, role, image, location, }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs
        sm:max-w-md mx-3 transform hover:scale-105 transition-transform 
        duration-300 ease-in-out">
            <div className="flex flex-col items-center">
                <div className="w-auto h-auto overflow-hidden 
                 shadow-md mb-4">
                    <Image
                        className="object-cover"
                        src={image}
                        alt={`${name}'s Profile Picture`}
                        width={540}
                        height={540}
                    />
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
                <p className="text-gray-500 mb-4">{role}</p>
            </div>

            <div className="text-gray-700">
                <p className="flex items-center mb-2">
                    <FiMapPin className="w-5 h-5 text-blue-500 mr-2" /> {location}
                </p>
            </div>

        </div>
    );
};

export default ContactCard;