import { ComponentProps } from "react"
import Image from 'next/image'

interface Props {
    src?: string,
    Icon?: (props: ComponentProps<'svg'>) => JSX.Element,
    title: string
}

const SidebarRow: React.FC<Props> = ({src, Icon, title}) => {
    return (
        <div className="flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
            {src && (
                <Image className="rounded-full" src={src} alt={title} width={30} height={30} layout="fixed" />
            )}
            {Icon && (
                <Icon className="h-6 w-6 text-blue-500" />
            )}
            <p className="hidden sm:inline-flex font-medium">{title}</p>
        </div>
    )
}

export default SidebarRow
