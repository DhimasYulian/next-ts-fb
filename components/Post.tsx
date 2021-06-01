import Image from "next/image"
import {ChatAltIcon, ShareIcon, ThumbUpIcon} from "@heroicons/react/outline"
import firebase from 'firebase'

interface Props {
    name: string,
    email: string,
    image: string,
    message: string,
    timestamp: firebase.firestore.Timestamp,
    file: string
}

const Post: React.FC<Props> = ({name, image, message, timestamp, file}) => {
    return (
        <div className="flex flex-col">
        <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
            <div className="flex items-center space-x-2">
                <Image src={image} width={40} height={40} className="rounded-full" />
                <div>
                    <p className="font-medium">{name}</p>
                    {timestamp ? <p className="text-xs text-gray-400">{timestamp.toDate().toDateString()}</p> : <p className="text-xs text-gray-400">Loading...</p>}
                </div>
            </div>
            <p className="pt-4">{message}</p>
        </div>
        {file && (
            <div className="relative h-56 md:h-96 bg-white">
                <Image src={file} objectFit="cover" layout="fill" />
            </div>
        )}
        <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
            <div className="inputIcon rounded-none rounded-bl-2xl py-2">
                <ThumbUpIcon className="h-5" />
                <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none py-2">
                <ChatAltIcon className="h-5" />
                <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-none rounded-br-2xl py-2">
                <ShareIcon className="h-5" />
                <p className="text-xs sm:text-base">Share</p>
            </div>
        </div>
        </div>
    )
}

export default Post
