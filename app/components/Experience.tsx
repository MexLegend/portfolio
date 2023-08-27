import React from 'react'
import SectionHeader from './SectionHeader'
import { gradients } from '../mocks/gradients'

const Experience = () => {
    return (
        <section className='relative py-20'>
            <SectionHeader label='Experience' gradient={gradients[0]} />
        </section>
    )
}

export default Experience