import React from 'react'
import SectionHeader from './SectionHeader'
import { gradients } from '../mocks/gradients'

const Contact = () => {
    return (
        <section className='py-20'>
            <SectionHeader label='Contact' gradient={gradients[2]} />
        </section>
    )
}

export default Contact