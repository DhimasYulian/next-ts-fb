import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import Contact from "./Contact"

const contacts = [
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
]

const Widgets: React.FC = () => {
    return (
        <div className="hidden lg:flex flex-col w-60 mt-5 px-2">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6" />
                    <VideoCameraIcon className="h-6" />
                </div>
            </div>

            {contacts.map((contact, idx) => (
                <Contact 
                    key={idx}
                    name={contact.name}
                    src={contact.src}
                />
            ))}
        </div>
    )
}

export default Widgets
