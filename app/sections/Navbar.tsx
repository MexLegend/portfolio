'use client';

import { BsLinkedin, BsGithub } from 'react-icons/bs';
import SocialMediaButton from '../components/SocialMediaButton';
import { navLinks } from '../mocks/navlinks';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import useActiveLinkStore from '../hooks/useActiveLink';

export default function Navbar() {

    const params = useSearchParams();
    const { activeLink, scrollOffset, setActiveLink } = useActiveLinkStore((state) => state);

    useEffect(() => {
        const navLink = navLinks.find(e => e.href === window.location.hash) || navLinks[0];
        const navLinkElement = document.getElementById('link-' + navLink?.label.toLowerCase());

        setActiveLink(
            {
                ...navLink,
                width: `${navLinkElement?.offsetWidth || 59}px`,
                translateX: `${navLinkElement?.offsetLeft || 0}px`,
            });
    }, [params]);

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
        `}>
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
                                ${activeLink?.label === link.label && '!text-white'}
                                `}
                                href={link.href}
                                id={'link-' + link.label.toLowerCase()}
                                key={link.label}
                                style={{
                                    ['--startColor' as string]: link.gradient.startColor,
                                    ['--endColor' as string]: link.gradient.endColor
                                }}
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
                    ${activeLink?.gradient.startColor}
                    ${activeLink?.gradient.endColor}
                `}
                    style={{
                        ['--translate-x' as string]: activeLink?.translateX,
                        ['--width' as string]: activeLink?.width
                    }}
                >
                </div>
            </ul>
            <div className='flex gap-6 ml-auto'>
                <SocialMediaButton icon={BsLinkedin} href='https://linkedin.com/in/armandolara97' />
                <SocialMediaButton icon={BsGithub} href='https://github.com/MexLegend' />
            </div>
        </nav>
    )
}
