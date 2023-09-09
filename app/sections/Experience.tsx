import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { gradients } from '../mocks/gradients';
import SkillCard from '../components/SkillCard';
import { skills } from '../mocks/skills';

const Experience = () => {
    return (
        <section id='experience' className='section relative pt-20'>
            <SectionHeader label='Experience' gradient={gradients[0]} />
            <div className='flex flex-1 justify-center flex-wrap w-full gap-y-12 gap-x-4 pt-16 pb-20 max-sm:pb-5'>
                {
                    skills.map(s => {
                        return <SkillCard
                            key={s.label}
                            label={s.label}
                            icon={s.icon}
                            experience={s.experience}
                            experienceTime={s.experienceTime}
                            showPlusLabel={s.showPlusLabel}
                        />
                    })
                }
            </div>
        </section>
    )
}

export default Experience