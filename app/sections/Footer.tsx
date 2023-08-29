'use client';

import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaArrowUp } from 'react-icons/fa';
import SocialMediaButton from '../components/SocialMediaButton';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='flex items-center w-full px-[10%] border-t h-20  border-t-light-blue justify-between'>
            <div className='flex gap-6'>
                <SocialMediaButton icon={BsLinkedin} url='#' />
                <SocialMediaButton icon={BsGithub} url='#' />
            </div>
            <Link
                className={`
                    ml-auto 
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