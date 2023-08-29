'use client';

import React from 'react'
import FormInput from './FormInput'
import GradientButton from './GradientButton'

const Form = () => {
    return (
        <form className='flex flex-col w-full max-w-2xl rounded-lg border border-light-blue mx-auto my-20 shadow-lg'>
            <div className='flex w-full border-b border-light-blue p-3 gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#ff5f56]'></div>
                <div className='w-3 h-3 rounded-full bg-[#ffbd2e]'></div>
                <div className='w-3 h-3 rounded-full bg-[#27c93f]'></div>
            </div>
            <div className='flex flex-col w-full p-12 gap-6'>
                <FormInput id='first_name' key='first_name' label='First Name' type='text' />
                <FormInput id='last_name' key='last_name' label='Last Name' type='text' />
                <FormInput id='email' key='email' label='Email' type='email' />
                <FormInput id='message' key='message' label='Message' type='text' />
                <GradientButton
                    label='Send'
                    customClasses='!w-full'
                    outLined={false}
                    startColor='from-[#FF4D4D]'
                    endColor='to-[#F9CB28]'
                    click={() => { }} />
            </div>
        </form>
    )
}

export default Form