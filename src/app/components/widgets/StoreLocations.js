import ContactCard from './ContactCard';

const contacts = [
    {
        name: "Gregory Hills",
        role: "",
        email: "",
        phone: "",
        location: "2/37 Rodeo Road",
        linkedin: "",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/gregoryhills.png?alt=media&token=b74fceb2-5f6e-444e-8320-b38eec431eed"
    },
    {
        name: "Moss Vale",
        role: "",
        email: "",
        phone: "",
        location: "10B McCourt Road",
        linkedin: "",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/mossvale.jpg?alt=media&token=19c07ef0-7faa-4b77-9377-524ab614220a"
    },
    {
        name: "Goulburn",
        role: "",
        email: "",
        phone: "",
        location: "1/135 Finlay Road",
        linkedin: "",
        github: "",
        image: "https://firebasestorage.googleapis.com/v0/b/southerncrosssmashrepairs.appspot.com/o/Goulburn.jpg?alt=media&token=f0f2b039-a904-44d2-8f1b-5028ba4c63aa"
    },
];

export default function StoreLocations() {
    return (
        <div className="flex flex-wrap 
        justify-center items-center p-4">
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    name={contact.name}
                    role={contact.role}
                    email={contact.email}
                    phone={contact.phone}
                    location={contact.location}
                    linkedin={contact.linkedin}
                    github={contact.github}
                    image={contact.image}
                />
            ))}
        </div>
    );
}