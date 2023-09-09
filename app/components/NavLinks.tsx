import { useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react'
import useActiveLinkStore from '../hooks/useActiveLink';
import { navLinks } from '../mocks/navlinks';
import Link from 'next/link';

type NavLinksDirection = "Vertical" | "Horizontal";

interface NavLinksProps {
    direction: NavLinksDirection;
    hideOnMobile?: boolean;
}

const NavLinks: FC<NavLinksProps> = ({ direction, hideOnMobile }) => {

    const params = useSearchParams();
    const { activeLink, setActiveLink } = useActiveLinkStore((state) => state);

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
        <ul className={`flex gap-4 relative ${hideOnMobile && 'max-md:hidden'} ${direction === 'Vertical' && 'flex-col text-2xl gap-8'}`}>
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
            <div id='indicator'
                className={`
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
    )
}

export default NavLinks