import React from 'react'
import SectionHeader from '../components/SectionHeader'
import { gradients } from '../mocks/gradients'
import Form from '../components/Form'

const Contact = () => {
    return (
        <section id='contact' className='section pt-16 pb-20 max-sm:pb-5'>
            <SectionHeader label='Contact' gradient={gradients[2]} />
            <Form />
        </section>
    )
}

export default Contact