'use client';

import { FaAngular } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import SectionHeader from './SectionHeader'
import { gradients } from '../mocks/gradients'
import Card from './Card'

const Projects = () => {
    return (
        <section className='py-20'>
            <SectionHeader label='Projects' gradient={gradients[1]} />
            <div
                className="
                    z-50
                    grid 
                    gap-3 
                    sm:grid-cols-1 
                    md:grid-cols-3 
                    lg:grid-cols-3 
                    lg:gap-x-20 
                    justify-items-center 
                    pt-16
                "
            >
                <Card image="images/image.svg" icon={FaAngular} />
                <Card image="images/image2.svg" icon={TbBrandNextjs} />
                <Card image="images/image3.svg" icon={TbBrandNextjs} />
            </div>
        </section>
    )
}

export default Projects