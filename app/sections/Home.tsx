'use client';

import { gradients } from '../mocks/gradients';
import Button from '../components/Button';
import GradientButton from '../components/GradientButton';
import GradientText from '../components/GradientText';

export default function Home() {

    const reverseGradients = [...gradients].reverse();

    const handleDownloadCV = () => {
        window.open('cv/Armando_Lara_CV_V2.pdf', '_selft')!.focus();
    }

    return (
        <section id='home' className='section flex flex-1 relative items-center justify-start h-screen min-h-[calc(100vh-64px)] w-full'>
            <div className='flex flex-col gap-2 text-white'>
                <span className='text-2xl font-semibold leading-none'>Hello! I am</span>
                <div className='relative flex h-28 text-8xl tracking-tight font-extrabold'>
                    {
                        gradients.map((gradient, index) => {
                            return <div key={'gardient-word-' + index}
                                className={`
                                    absolute 
                                    inset-0 
                                    flex 
                                    text-8xl 
                                    tracking-tight 
                                    font-extrabold
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
                <p className='text-lg text-white/60 max-w-2xl'>
                    Code, Design, Create: With a keen eye for design and a mastery of cutting-edge web and mobile technologies, I specialize in turning ideas into stunning, functional realities.
                </p>
                <div className='flex items-start w-full gap-5 mt-10'>
                    <Button label='Hire me' customClasses='!w-40 !mx-0' href='#contact' target='_self' />
                    <GradientButton
                        label='Download CV'
                        outLined={true}
                        gradientCycle={true}
                        href='cv/Armando_Lara_CV_V2.pdf'
                        target='_self'
                        download
                    />
                </div>
            </div>
            <div className='flex flex-1 pl-20'>
                <img className='w-full h-full object-contain' src="images/avatar.png" alt="avatar_image" />
            </div>
        </section>
    )
}
