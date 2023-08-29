'use client';

import { FC, HTMLAttributeAnchorTarget } from "react";

interface ButtonProps {
    label: string;
    href: string;
    target: HTMLAttributeAnchorTarget;
    customClasses?: string;
}

const Button: FC<ButtonProps> = ({ label, href, target, customClasses }) => {
    return (
        <a
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
            href={href}
            target={target}
            rel="noreferrer"
        >
            <span className="ml-2">{label}</span>
        </a>
    );
}

export default Button;