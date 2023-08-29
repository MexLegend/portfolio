'use client';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import SocialMediaButton from '../components/SocialMediaButton';
import { navLinks } from '../mocks/navlinks';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { NavLink } from '../types/navlink';

export default function Navbar() {

    const router = useSearchParams();
    const [activeRoute, setActiveRoute] = useState<NavLink | undefined>(undefined);

    useEffect(() => {
        const navLink = navLinks.find(e => e.href === window.location.hash);
        setActiveRoute(navLink);
    }, [router]);

    return (
        <nav className='
            sticky
            top-0
            left-0
            h-20 
            flex
            gap-12
            w-full
            items-center
            border-b 
            border-b-indigo-900/40 
            px-[10%]
            bg-black/50
            before:absolute
            before:w-full
            before:h-full
            before:backdrop-filter
            before:backdrop-saturate-[180%]
            before:backdrop-blur-[5px]
            before:inset-0
            before:-z-10
            z-[9999]
            '>
            <Link
                className="transition duration-200 active:scale-95 text-lg text-white font-bold hover:text-white"
                href="#home"
            >
                Portfolio
            </Link>
            <ul className='flex gap-4 relative'>
                {navLinks.map((link) => {
                    return (
                        <li key={link.label}>
                            <Link
                                className={`
                                relative
                                transition 
                                duration-200 
                                p-2
                                active:scale-95 
                                text-white/70 
                                hover:text-white
                                `}
                                href={link.href}
                                id={'link-' + link.label.toLowerCase()}
                                key={link.label}
                            >
                                {link.label}
                            </Link>
                        </li>

                    )
                })}
                <div id='indicator' className={`
                    absolute
                    transition-all
                    duration-700
                    w-[var(--width)]
                    h-[2px]
                    left-0
                    translate-x-[var(--translate-x)]
                    -bottom-2
                    rounded-t-md
                    bg-gradient-to-r
                    ${activeRoute?.gradient.startColor} 
                    ${activeRoute?.gradient.endColor}
                `}
                    style={{ ['--translate-x' as string]: 0, ['--width' as string]: '59px' }}
                >
                </div>
            </ul>
            <div className='flex gap-6 ml-auto'>
                <SocialMediaButton icon={BsLinkedin} url='#' />
                <SocialMediaButton icon={BsGithub} url='#' />
            </div>
        </nav>
    )
}
