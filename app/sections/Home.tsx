'use client';

import { gradients } from '../mocks/gradients';
import Button from '../components/Button';
import GradientButton from '../components/GradientButton';
import GradientText from '../components/GradientText';

export default function Home() {

    const reverseGradients = [...gradients].reverse();

    return (
        <section
            id='home'
            className='
                section 
                flex 
                flex-1 
                relative 
                items-center 
                justify-start 
                h-screen 
                min-h-[calc(100vh-64px)] 
                w-full
                max-[1100px]:flex-col-reverse
                max-[1100px]:gap-12
                max-[1100px]:justify-center
                max-[1100px]:text-center
            '>
            <div className='flex flex-col max-[1100px]:w-full max-[1100px]:items-center gap-2 text-white'>
                <span className='text-xl xl:text-2xl font-semibold leading-none'>Hello! I am</span>
                <div className='
                    relative 
                    flex 
                    text-6xl 
                    xl:text-[5rem] 
                    2xl:text-8xl 
                    tracking-tight 
                    font-extrabold 
                    max-[1100px]:w-full
                    '>
                    <div className='invisible flex max-[480px]:flex-col'><span>Armando</span> <span>Lara</span></div>
                    {
                        gradients.map((gradient, index) => {
                            return <div key={'gardient-word-' + index}
                                className={`
                                    absolute 
                                    inset-0 
                                    flex 
                                    tracking-tight 
                                    font-extrabold
                                    max-[480px]:flex-col
                                    max-[1100px]:items-center
                                    max-[1100px]:justify-center
                                    opacity-0
                                    ${index === 1 && 'animate-delay-[6.66s]'}
                                    ${index === 2 && 'animate-delay-[13.33s]'}
                                    animate-duration-[20s]
                                    animate-bg-gradient-cycle
                                `}>
                                <GradientText
                                    text='Armando'
                                    gradient={index === 0 ? gradient : reverseGradients[index - 1]}
                                    animationDelay={`
                                        ${index === 1 && 'animate-delay-[6.66s]'}
                                        ${index === 2 && 'animate-delay-[3.33s]'}
                                    `}
                                />
                                <GradientText
                                    text='Lara'
                                    gradient={reverseGradients[(index + 1) % gradients.length]}
                                    animationDelay={`
                                        ${index === 0 && 'animate-delay-[3.33s]'}
                                        ${index === 2 && 'animate-delay-[6.66s]'}
                                    `}
                                />
                            </div>
                        })
                    }
                </div>
                <p className='text-lg text-white/60 max-w-sm lg:max-w-md xl:max-w-xl mt-3'>
                    Code, Design, Create: with a keen eye for design and a mastery of cutting-edge web and mobile technologies, I specialize in turning ideas into stunning, functional realities.
                </p>
                <div className='flex items-start max-[1100px]:justify-center w-full gap-5 mt-10'>
                    <Button label='Hire me' customClasses='!w-40 !mx-0' href='#contact' target='_self' />
                    <GradientButton
                        label='Download CV'
                        outLined={true}
                        gradientCycle={true}
                        href='cv/Armando_Lara_CV.pdf'
                        target='_self'
                        download
                    />
                </div>
            </div>
            <div className='flex flex-1 w-full ml-auto max-w-sm xl:max-w-md max-[1100px]:mx-auto max-[1100px]:mt-12'>
                <img className='w-full h-full object-contain' src="images/avatar.png" alt="avatar_image" />
            </div>
        </section>
    )
}
