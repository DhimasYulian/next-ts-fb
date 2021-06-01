import Image from 'next/image'

interface Props {
    name: string,
    src: string
}

const Contact: React.FC<Props> = ({name, src}) => {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image 
                className="rounded-full"
                objectFit="cover"
                src={src}
                width={40}
                height={40}
                layout="fixed"
            />
            <p className="font-medium truncate">{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-pulse"></div>
        </div>
    )
}

export default Contact