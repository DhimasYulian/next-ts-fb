import StoryCard from "./StoryCard"

const stories = [
    {
        name: "Elon Musk", 
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk", 
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk", 
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Elon Musk", 
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
]

const Stories = () => {
    return (
        <div className="flex justify-center items-center space-x-3 mx-auto">
            {
                stories.map((story, idx) => (
                    <StoryCard key={idx} name={story.name} profile={story.profile} src={story.src} />
                ))
            }
        </div>
    )
}

export default Stories
