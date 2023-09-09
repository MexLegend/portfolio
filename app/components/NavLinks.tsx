import { useSearchParams } from 'next/navigation';
import { FC, useEffect } from 'react'
import useActiveLinkStore from '../hooks/useActiveLink';
import { navLinks } from '../mocks/navlinks';
import Link from 'next/link';
import useToogleNavMenuStore from '../hooks/useToogleNavMenu';

type NavLinksDirection = "Vertical" | "Horizontal";

interface NavLinksProps {
    direction: NavLinksDirection;
    hideOnMobile?: boolean;
}

const NavLinks: FC<NavLinksProps> = ({ direction, hideOnMobile }) => {

    const params = useSearchParams();
    const { isOpen, setIsOpen } = useToogleNavMenuStore((state) => state);
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
        <ul className={`
            flex 
            gap-4 
            relative 
            ${hideOnMobile && 'max-md:hidden'} 
            ${direction === 'Vertical' && 'flex-col w-full text-center text-2xl gap-8'}
        `}>
            {navLinks.map((link, index) => {
                return (
                    <li key={link.label} className={`
                        ${direction === 'Vertical' && 'transition-all translate-y-2/4 delay-[350ms] opacity-0 ease-out duration-500'}
                        ${direction === 'Vertical' && isOpen && '!opacity-100 !translate-y-0 delay-[var(--delay)]'}
                    `}
                        style={{ ...(direction === 'Vertical' && isOpen && { transitionDelay: index === 0 ? '300ms' : `${300 + (150 * index)}ms` }) }}
                    >
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
                                ${activeLink?.label === link.label && direction === 'Vertical' && `
                                    after:w-full
                                    after:h-1
                                    after:absolute
                                    after:left-0
                                    after:-bottom-1
                                    after:bg-gradient-to-r
                                    after:from-[var(--startColor)]
                                    after:to-[var(--endColor)]
                                `}
                            `}
                            href={link.href}
                            id={'link-' + link.label.toLowerCase()}
                            key={link.label}
                            style={{
                                ['--startColor' as string]: link.gradient.startPureColor,
                                ['--endColor' as string]: link.gradient.endPureColor
                            }}
                            onClick={() => direction === 'Vertical' ? setIsOpen(!isOpen) : undefined}
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
                    ${direction === 'Vertical' && 'hidden'}
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