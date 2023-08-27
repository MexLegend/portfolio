import { BsLinkedin, BsGithub } from 'react-icons/bs';
import SocialMediaButton from './SocialMediaButton';
import NavLink from './NavLink';

export default function Navbar() {
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
            <NavLink label='Portfolio' link='#' customClasses='text-lg !text-white font-bold'/>
            <ul className='flex gap-6'>
                <li className=''>
                    <NavLink label='Home' link='#' />
                </li>
                <li className=''>
                    <NavLink label='Experience' link='#' />
                </li>
                <li className=''>
                    <NavLink label='Projects' link='#' />
                </li>
                <li className=''>
                    <NavLink label='Contact' link='#' />
                </li>
            </ul>
            <div className='flex gap-6 ml-auto'>
                <SocialMediaButton icon={BsLinkedin} url='#' />
                <SocialMediaButton icon={BsGithub} url='#' />
            </div>
        </nav>
    )
}
