import {useCollection} from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post'


const Posts: React.FC = () => {
    const [realtimePosts] = useCollection(
        db.collection("posts").orderBy("timestamp", "desc")
    )
    return (
        <div>
            {
            realtimePosts?.docs.map(post => (
                <Post 
                    key={post.id}
                    name={post.data().name}
                    message={post.data().message}
                    email={post.data().email}
                    image={post.data().image}
                    timestamp={post.data().timestamp}
                    file={post.data().file}
                />
            ))}

        </div>
    )
}

export default Posts
