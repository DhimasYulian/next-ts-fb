import { ComponentProps, FC } from "react"

interface Props {
    active: boolean,
    Icon: (props: ComponentProps<'svg'>) => JSX.Element
}

const HeaderIcon: FC<Props> = ({Icon, active}) => {
    return (
        <div className="flex items-center rounded-xl cursor-pointer md:px-10 sm:h-14 md:bg-gray-100 active:border-b-2 active:border-blue-500 group">
            <Icon className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${active && "text-blue-500"}`} />
        </div>
    )
}

export default HeaderIcon