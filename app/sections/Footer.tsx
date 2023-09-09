'use client';

import React from 'react'
import { BsLinkedin, BsGithub, BsFillHeartFill } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';
import SocialMediaButton from '../components/SocialMediaButton';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex items-center w-full px-[10%] max-md:px-[5%] border-t h-16 border-t-light-blue justify-between'>
            <div className='flex gap-6'>
                <SocialMediaButton icon={BsLinkedin} href='https://linkedin.com/in/armandolara97' />
                <SocialMediaButton icon={BsGithub} href='https://github.com/MexLegend' />
            </div>
            <p className='w-full flex items-center gap-2 justify-center text-center max-sm:hidden'>
                <span className='flex items-center justify-center gap-2 text-white/70'>
                    Made with <span className='text-rose-600'><BsFillHeartFill /></span> by
                </span>
                <strong className='text-white'>Armando Lara</strong>
            </p>
            <Link
                className={`
                    text-dark-blue
                    transition 
                    duration-200 
                    bg-white/70 
                    hover:bg-white
                    active:scale-95
                    rounded-full
                    p-2
                `}
                href="#home"
            >
                <FaArrowUp />
            </Link>
        </div>
    )
}

export default Footer