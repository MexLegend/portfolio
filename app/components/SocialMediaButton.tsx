import { FC } from "react";
import { IconType } from "react-icons"

interface Props {
    icon: IconType;
    url: string;
}

const SocialMediaButton: FC<Props> = ({ icon: Icon, url }) => {

    return (
        <a className='text-white/70 text-2xl transition duration-200 active:scale-95 hover:text-white' href={url} >
            <Icon />
        </a>
    )
}

export default SocialMediaButton;