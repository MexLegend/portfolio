import { FC } from "react";
import { IconType } from "react-icons"

interface Props {
    icon: IconType;
    href: string;
}

const SocialMediaButton: FC<Props> = ({ icon: Icon, href }) => {

    return (
        <a
            className='text-white/70 text-2xl transition duration-200 active:scale-95 hover:text-white'
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            <Icon />
        </a>
    )
}

export default SocialMediaButton;