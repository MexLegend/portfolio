import { FC } from 'react'
import { Gradient } from '../types/gradient';

interface Props {
    text: string;
    gradient: Gradient;
    animationDelay?: string
}

const GradientText: FC<Props> = ({ text, gradient, animationDelay }) => {
    return (
        <span className={`
            brightness-0
            invert-[1]
            px-2 
            text-transparent 
            bg-clip-text 
            bg-gradient-to-r 
            animate-text-gradient-cycle
            ${gradient.startColor}
            ${gradient.endColor}
            ${animationDelay}
        `}>
            {text}
        </span>
    )
}

export default GradientText