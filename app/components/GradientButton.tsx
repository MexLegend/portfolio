'use client';

import { FC, HTMLAttributeAnchorTarget } from 'react'
import { gradients } from '../mocks/gradients';
import Loader from './Loader';

interface Props {
    label: string;
    click?: () => void;
    href?: string;
    target?: HTMLAttributeAnchorTarget;
    download?: boolean;
    outLined: boolean;
    customClasses?: string;
    gradientCycle?: boolean;
    loaderColor?: string;
    startColor?: string;
    endColor?: string;
    isLoading?: boolean
}

const GradientButton: FC<Props> = ({
    label,
    click,
    href,
    target,
    download,
    outLined,
    customClasses,
    gradientCycle,
    startColor,
    endColor,
    isLoading
}) => {

    return (
        <a
            className={`
                relative 
                w-40 
                h-12 
                transition 
                duration-200 
                active:scale-95 
                ${customClasses}
                ${isLoading && 'pointer-events-none'}
            `}
            onClick={click}
            href={href}
            target={target}
            download={download}
            rel="noreferrer"
        >
            <div className={`
                z-40
                group
                relative
                transition 
                duration-500 
                active:scale-95
                px-4 
                py-2 
                rounded-lg
                font-semibold
                flex 
                flex-1
                w-full
                h-full
                shadow-[0_4px_4px_0_#00000040]
                text-white 
                bg-transparent
            `}>
                <span className={`z-20 absolute inset-0 flex items-center justify-center ${isLoading && 'hidden'}`}>{label}</span>
                {isLoading && <Loader/>}
                {
                    outLined && <div className={`
                        z-10
                        transition-colors
                        duration-500
                        absolute 
                        h-[calc(100%-2px)] 
                        w-[calc(100%-2px)] 
                        m-auto
                        inset-0 
                        rounded-lg
                        bg-dark-blue
                        group-hover:bg-transparent
                    `}>
                    </div>
                }
            </div>
            {
                gradientCycle && <>
                    {
                        gradients.map(({ startColor, endColor }, index) => {
                            return <div key={index} className={`
                                opacity-0
                                ${index === 0 && '-z-10 opacity-100'},
                                ${index === 1 && 'animate-delay-[3.33s] -z-20'},
                                ${index === 2 && 'animate-delay-[6.66s] -z-30'}
                                animate-bg-gradient-cycle
                                rounded-lg
                                absolute 
                                inset-0 
                                bg-clip-padding
                                bg-gradient-to-r 
                                w-full 
                                h-full
                                ${startColor} 
                                ${endColor}
                                before:absolute
                                before:rounded-lg
                                before:inset-0
                                before:h-[35%]
                                before:m-auto
                                before:bg-gradient-to-r
                                before:${startColor} 
                                before:${endColor} 
                                before:blur-[36px]
                                before:-z-10 
                                `}>
                            </div>
                        })
                    }
                </>
            }
            {
                !gradientCycle && <div className={`
                    -z-10
                    rounded-lg
                    absolute 
                    inset-0 
                    bg-clip-padding
                    bg-gradient-to-r 
                    w-full 
                    h-full
                    ${startColor} 
                    ${endColor}
                    before:absolute
                    before:rounded-lg
                    before:inset-0
                    before:h-[35%]
                    before:m-auto
                    before:bg-gradient-to-r
                    before:${startColor} 
                    before:${endColor} 
                    before:blur-[36px]
                    before:-z-10 
                `}>
                </div>
            }
        </a>
    )
}

export default GradientButton;