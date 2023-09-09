'use client';

import React, { useState } from 'react'
import FormInput from './inputs/FormInput'
import GradientButton from './GradientButton'
import { FieldValues, useForm } from 'react-hook-form';
import FormTextarea from './inputs/FormTextArea';

const Form = () => {

    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            message: "",
            firstName: "",
            lastName: ""
        }
    });

    const sendEmail = async (values: FieldValues) => {
        setIsLoading(true);

        const resp = await fetch("api/email", {
            method: "POST",
            body: JSON.stringify({ ...values })
        });

        setIsLoading(false);

        const data = await resp.json()

        if (data.success) reset();

    }

    return (
        <form className='flex flex-col w-full max-w-2xl rounded-lg border border-light-blue mx-auto my-20 shadow-lg'>
            <div className='flex w-full border-b border-light-blue p-3 gap-2'>
                <div className='w-3 h-3 rounded-full bg-[#ff5f56]'></div>
                <div className='w-3 h-3 rounded-full bg-[#ffbd2e]'></div>
                <div className='w-3 h-3 rounded-full bg-[#27c93f]'></div>
            </div>
            <div className='flex flex-col w-full p-12 gap-6 max-sm:px-6'>
                <FormInput
                    id='firstName'
                    key='firstName'
                    label='First Name'
                    type='text'
                    disabled={isLoading}
                    required
                    register={register}
                    errors={errors} />
                <FormInput
                    id='lastName'
                    key='lastName'
                    label='Last Name'
                    type='text'
                    disabled={isLoading}
                    required
                    register={register}
                    errors={errors} />
                <FormInput
                    id='email'
                    key='email'
                    label='Email'
                    type='email'
                    disabled={isLoading}
                    required
                    register={register}
                    errors={errors} />
                <FormTextarea
                    id='message'
                    key='message'
                    label='Message'
                    cols={30}
                    rows={5}
                    disabled={isLoading}
                    required
                    register={register}
                    errors={errors} />
                <GradientButton
                    label='Send'
                    customClasses='!w-full'
                    outLined={false}
                    startColor='from-[#FF4D4D]'
                    endColor='to-[#F9CB28]'
                    click={handleSubmit(sendEmail)} />
            </div>
        </form>
    )
}

export default Form