import Image from 'next/image'
import {signIn} from 'next-auth/client'

const Login: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image src="https://links.papareact.com/5me" width={200} height={200} objectFit="contain" />
            <button onClick={() => signIn()} className="mt-10 p-3 bg-blue-500 rounded-full text-center text-white hover:bg-blue-600">Login with Google</button>
        </div>
    )
}

export default Login
