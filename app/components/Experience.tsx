import React from 'react';
import SectionHeader from './SectionHeader';
import { gradients } from '../mocks/gradients';
import SkillCard from './SkillCard';
import { skills } from '../mocks/skills';

const Experience = () => {
    return (
        <section className='relative pt-12'>
            <SectionHeader label='Experience' gradient={gradients[0]} />
            <div className='flex flex-1 justify-center flex-wrap w-full gap-y-10 gap-x-4 pt-20'>
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