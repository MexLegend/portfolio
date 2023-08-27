import { FC } from 'react'

interface Props {
    label: string;
    link: string;
    customClasses?: string;
}

const NavLink: FC<Props> = ({ label, link, customClasses }) => {
    return (
        <a className={`
            transition 
            duration-200 
            active:scale-95 
            text-white/70 
            hover:text-white
            ${customClasses}
            `}
            href={link}>
            {label}
        </a>
    )
}

export default NavLink