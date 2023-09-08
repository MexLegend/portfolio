'use client';

import React, { FC } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface Props {
    id: string;
    label: string;
    cols: number;
    rows: number;
    disabled?: boolean;
    required?: boolean;
    errors: FieldErrors;
    register: UseFormRegister<FieldValues>
}

const FormTextarea: FC<Props> = ({ id, label, cols, rows, disabled, required, errors, register }) => {
    return (
        <div className='relative w-full'>
            <textarea {...register(id, { required })}
                className={`
                    peer 
                    relative
                    text-white 
                    w-full 
                    rounded-lg 
                    outline-none
                    border
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                    transition
                    duration-200
                    ${errors[id] ? 'border-rose-500' : 'border-light-blue'}
                    ${errors[id] ? 'focus:border-rose-500' : 'focus:border-[#F9CB28]'}
                    ${errors[id] ? 'focus:shadow-[0_0_0_1px_rgb(244,63,94)]' : 'focus:shadow-[0_0_0_1px_#F9CB28]'}
                    px-3 
                    py-3 
                    bg-light-blue
                `}
                id={id}
                required={true}
                disabled={disabled}
                cols={cols}
                rows={rows}
                placeholder=" " />
            <label className={`
                ${errors[id] ? 'text-rose-400' : 'text-white/60'}
                absolute 
                pointer-events-none 
                duration-150 
                origin-[0] 
                -translate-y-3
                scale-[.70] 
                peer-focus:-translate-y-3
                peer-focus:scale-[.70] 
                peer-placeholder-shown:scale-100 
                peer-placeholder-shown:translate-y-0 
                text-md 
                top-3
                left-3
                transform 
                z-10
            `} htmlFor={id}>{label}</label>
            <div className={`
                block 
                pointer-events-none
                peer-placeholder-shown:hidden 
                w-[calc(100%-20px)] 
                bg-[#393c55] 
                h-4 
                absolute 
                left-[1px] 
                top-[1px] 
                rounded-tl-lg
                ${disabled && 'opacity-70'}
            `}
                ></div>
        </div>
    )
}

export default FormTextarea