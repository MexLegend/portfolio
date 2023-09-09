'use client';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import SocialMediaButton from '../components/SocialMediaButton';
import Link from 'next/link';
import useActiveLinkStore from '../hooks/useActiveLink';
import NavLinks from '../components/NavLinks';
import NavMenu from '../components/NavMenu';
import useToogleNavMenuStore from '../hooks/useToogleNavMenu';

export default function Navbar() {

    const { scrollOffset } = useActiveLinkStore((state) => state);
    const { isOpen } = useToogleNavMenuStore((state) => state);

    return (
        <nav className={`
            sticky
            top-0
            left-0
            h-16 
            flex
            gap-12
            w-full
            items-center
            px-[10%]
            max-md:px-[5%]
            bg-transparent
            border-b 
            border-b-transparent
            transition-all
            duration-200
            z-[9999]
            ${scrollOffset >= 80 && `
                !h-20
                !border-b-indigo-900/40 
                !bg-black/50
                before:absolute
                before:w-full
                before:h-full
                before:backdrop-filter
                before:backdrop-saturate-[180%]
                before:backdrop-blur-[5px]
                before:inset-0
                before:-z-10
            `}
            ${isOpen && '!bg-dark-blue'}
        `}>
            <Link
                className="transition duration-200 active:scale-95 text-lg text-white font-bold hover:text-white"
                href="#home"
            >
                Portfolio
            </Link>
            <NavLinks direction='Horizontal' hideOnMobile />
            <div className='flex gap-6 ml-auto'>
                <SocialMediaButton icon={BsLinkedin} href='https://linkedin.com/in/armandolara97' />
                <SocialMediaButton icon={BsGithub} href='https://github.com/MexLegend' />
                <NavMenu />
            </div>
        </nav>
    )
}
