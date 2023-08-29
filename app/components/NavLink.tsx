'use client';

import { FC } from 'react';

interface Props {
    label: string;
    link: string;
    isActive?: boolean;
    customClasses?: string;
}

const NavLink: FC<Props> = ({ label, link, isActive, customClasses }) => {

    const handleSmoothScroll = () => {

        const html = document.querySelector('html');
        if (html) {
            html.style.scrollBehavior = 'smooth';
        }
    }

    return (
        <a className={`
            transition 
            duration-200 
            active:scale-95 
            text-white/70 
            hover:text-white
            ${customClasses}
            ${isActive ? '!text-white' : ''}
            `}
            href={link}
            onClick={handleSmoothScroll}
        >
            {label}
        </a>
    )
}

export default NavLink