'use client';

import React, { FC } from 'react'
import CardHexagonIcon from './CardHexagonIcon';
import Button from './Button';
import GradientButton from './GradientButton';
import { Project } from '../types/project';

interface Props {
    project: Project;
}

const CardBorderGradientTopToBottom = () => {
    return <div
        className="
        absolute 
        rounded-[20px] 
        inset-0
        p-[1px]
        mix-blend-overlay
        bg-blend-overlay
        pointer-events-none
        z-10
        w-full
        h-full
    "
        style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,.2), rgba(255,255,255,0))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "xor"
        }}
    ></div>
}

const CardBorderGradientBottomToTop = () => {
    return <div
        className="
            absolute 
            rounded-[20px] 
            inset-0
            p-[1.2px]
            mix-blend-overlay
            pointer-events-none
            z-10
            w-full
            h-full
            rotate-180
        "
        style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,.2), rgba(255,255,255,0))",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "xor"
        }}
    ></div>
}

const CardSeparator = () => {
    return (
        <div className="relative w-full pt-1">
            <div
                className="
                absolute 
                w-full 
                h-[1px]
                bg-gradient-to-r
                from-[rgba(249,248,247,0)]
                from-0%
                via-[rgba(255,255,255,100%)]
                via-15%
                to-[rgba(249,248,247,0)]
                to-100%
                blur-[.6px]
            "
            ></div>
            <div
                className="
                absolute 
                w-4/5 
                h-[2px]
                bg-gradient-to-r
                from-[rgba(96,46,166,0)]
                from-0%
                via-[rgba(201,119,214,100%)]
                via-15%
                to-[rgba(96,46,166,0)]
                to-100%
                blur-[1px]
                shadow-[0_4px_4px_rgba(0,0,0,0.25)]
            "
            ></div>
        </div>
    );
}

const Card: FC<Props> = ({ project: { name, thumbnail, description, frameworkIcon, codeLink, demoLink } }) => {

    return (
        <div
            className="
                group
                relative 
                flex 
                flex-col 
                items-stretch 
                justify-items-stretch 
                bg-[#0C1033] 
                h-[500px]
                w-full
                max-w-[440px] 
                rounded-[20px]
                overflow-hidden
            "
        >
            <div className="relative w-full h-[52%] rounded-[22px] overflow-hidden bg-[#D8D8D8]">
                <div
                    className="
                        absolute 
                        pointer-events-none 
                        z-10 
                        h-full 
                        w-full
                        left-0
                        top-0
                        border 
                        border-[rgba(255, 255, 255, 0.5)]
                        rounded-[20px]
                        mix-blend-overlay
                    "
                >
                </div>
                <img
                    src={thumbnail}
                    alt="card_img"
                    height={300}
                    width={400}
                    className="
                        object-cover 
                        h-full 
                        w-full 
                        group-hover:scale-110
                        transition
                        duration-500
                    "
                />
            </div>
            <div
                className="
                    absolute 
                    bottom-0 
                    left-0 
                    bg-gradient-to-b
                    from-[rgba(49,58,91,0)]
                    from-0%
                    via-[rgba(49,58,91,40%)]
                    via-44%
                    to-[rgba(49,58,91,100%)]
                    to-100%
                    w-full 
                    h-[276px] 
                    rounded-[20px]
                    backdrop-blur-[10px]
                    py-5
                    px-6
                    text-white
                    z-20
                "
            >
                <CardBorderGradientTopToBottom />
                <CardBorderGradientBottomToTop />
                <div className="absolute right-5 -top-10 z-10">
                    <CardHexagonIcon icon={frameworkIcon} />
                </div>
                <div className='flex flex-col flex-1 h-full'>
                    <h2 className="font-semibold text-xl">{name}</h2>
                    <CardSeparator />
                    <p className="text-white/60 line-clamp-5 mt-3">{description}</p>
                    <div className='flex gap-3 w-full relative mt-auto'>
                        <Button label='Code' customClasses='w-full max-w-[50%]' href={codeLink} target='_blank' />
                        <GradientButton
                            label='Demo'
                            customClasses='!w-full max-w-[50%]'
                            outLined={true}
                            startColor='from-[#7928CA]'
                            endColor='to-[#FF0080]'
                            href={demoLink}
                            target='_blank'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card