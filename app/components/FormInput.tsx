import React, { FC } from 'react'

interface Props {
    id: string;
    label: string;
    type: React.HTMLInputTypeAttribute;
}

const FormInput: FC<Props> = ({ id, label, type }) => {
    return (
        <div className='relative w-full'>
            <input className='
                peer 
                text-white 
                w-full 
                rounded-lg 
                outline-none
                border
                transition
                duration-200
                border-light-blue
                focus:border-[#F9CB28] 
                focus:shadow-[0_0_0_1px_#F9CB28]
                px-3 
                py-3 
                bg-light-blue'
                id={id}
                type={type}
                required={true}
                placeholder=" " />
            <label className={`
                text-white/60
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
        </div>
    )
}

export default FormInput