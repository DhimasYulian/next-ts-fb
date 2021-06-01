import { useSession } from 'next-auth/client'
import Image from 'next/image'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import {EmojiHappyIcon} from "@heroicons/react/outline"
import {CameraIcon, VideoCameraIcon} from '@heroicons/react/solid'
import { db, storage } from '../firebase'
import firebase from 'firebase'

const InputBox: React.FC = () => {
    const [file, setFile] = useState<string | ArrayBuffer | null>(null)
    const [session] = useSession()
    const inputRef = useRef<HTMLInputElement>(null)
    const filePicker = useRef<HTMLInputElement>(null)

    const sendPost = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!inputRef.current?.value) return

        db.collection('posts').add({
            message: inputRef.current.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then((doc) => {
            if(file){
                const upload = storage.ref(`posts/${doc.id}`).putString(file.toString(), "data_url")
                removeFile()
                upload.on("state_change", null, error => console.error(error), () => {
                    storage.ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            file: url
                        }, {merge: true})
                    })
                })
            }
        })

        inputRef.current.value = ""
    }

    const addFileToPost = (e: ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader;
        const target = e.target
        if (!target.files?.length) {
            return;
        }
        const file = target.files[0]
        if (file){
            reader.readAsDataURL(file)
        }

        reader.onload = (evt) => {
            if (!evt.target?.result) {
                return;
            }
            setFile(evt.target?.result)
        }
    }

    const removeFile = () => setFile(null)

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
        <div className="flex space-x-4 p-4 items-center ">
            <Image
                className="rounded-full"
                src={session?.user?.image || "https:links.papareact.com/5me"}
                width={40}
                height={40}
                layout="fixed"
            />
            <form className="flex flex-1" onSubmit={(e) => sendPost(e)}>
                <input ref={inputRef} className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none" type="text" placeholder={`What's on your mind, ${session?.user?.name || "User"}`} />
            </form>
            {
                file && (
                    <div onClick={removeFile} className="flex flex-col filter hover:brightness-110 transition duration-100 over:scale-105 cursor-pointer">
                        <img className="h-10 w-10 object-contain" src={file.toString()} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )
            }
        </div>
        <div className="flex justify-evenly p-3 border-1">
            <div className="inputIcon">
                <VideoCameraIcon className="h-7 text-red-500 "/>
                <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div onClick={() => filePicker.current?.click()} className="inputIcon">
                <CameraIcon className="h-7 text-green-400 "/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                <input ref={filePicker} type="file" hidden onChange={(e) => addFileToPost(e)} />
            </div>
            <div className="inputIcon">
                <EmojiHappyIcon className="h-7 text-yellow-300 "/>
                <p className="text-xs sm:text-sm xl:text-base">Activity</p>
            </div>
        </div>
        </div>
    )
}

export default InputBox
