
import { FC } from 'react';
import { Gradient } from '../types/gradient';

interface Props {
    label: string;
    gradient: Partial<Gradient>;
}

const SectionDivider: FC<Partial<Gradient>> = ({ startViaColor, endViaColor }) => {

    return <div className="absolute inset-0 m-auto -z-10 w-3/4 h-[.5px] left-0 -top-[.5px]">
        <div
            className={`
            absolute 
            w-full 
            h-[1px]
            bg-gradient-to-r
            from-transparent
            from-0%
            ${startViaColor}
            to-[rgba(249,248,247,0)]
            to-100%
            blur-[.2px]
        `}
        >
        </div>
        <div
            className={`
            absolute 
            w-full
            h-[1px]
            bg-gradient-to-r
            from-[rgba(96,46,166,0)]
            from-0%
            ${endViaColor}
            to-[rgba(96,46,166,0)]
            to-100%
            blur-[.5px]
            shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            `}>
        </div>
    </div>
}

const SectionHeader: FC<Props> = ({ label, gradient: { startColor, startViaColor, endColor, endViaColor } }) => {

    return (
        <div className="relative w-full text-center">
            <div className='bg-dark-blue px-9 py-5 w-min mx-auto'>
                <span className={`
                    z-10
                    text-center 
                    text-transparent 
                    bg-clip-text 
                    text-3xl 
                    font-bold 
                    bg-gradient-to-r 
                    ${startColor} 
                    ${endColor}
                `}>
                    {label}
                </span>
            </div>
            <SectionDivider startViaColor={startViaColor} endViaColor={endViaColor} />
        </div>
    )
}

export default SectionHeader;