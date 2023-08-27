'use client';

import { FC } from "react";

interface ButtonProps {
    label: string;
    click: () => void;
    customClasses?: string;
}

const Button: FC<ButtonProps> = ({ label, click, customClasses }) => {
    return (
        <button
            className={`
                group
                relative
                flex
                items-center
                justify-center
                p-0.5 
                mx-auto 
                w-[65%] 
                h-12 
                overflow-hidden 
                text-sm
                font-semibold
                rounded-lg
                transition
                ease-in 
                duration-200
                bg-white
                text-dark-blue 
                hover:opacity-90
                active:scale-95
                shadow-[0_4px_4px_rgba(0,0,0,0.1)]
                ${customClasses}
            `}
            onClick={click}
        >
            <span className="ml-2">{label}</span>
        </button>
    );
}

export default Button;