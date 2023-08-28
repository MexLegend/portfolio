import React, { FC } from 'react';
import { Skill } from '../types/skill';

const SkillCard: FC<Skill> = ({ icon: Icon, label, experience, experienceTime, showPlusLabel }) => {
    return (
        <div className='flex flex-col w-40 gap-2 items-center rounded-lg text-white'>
            <div className={`
                relative 
                text-6xl
                before:absolute
                before:rounded-lg
                before:inset-0
                before:m-auto
                before:bg-gradient-to-r
                before:from-[#007CF0] 
                before:to-[#00DFD8]
                before:opacity-50
                before:blur-[25px]
                before:-z-10 
                before:w-full
                before:h-full
            `}>
                <Icon />
            </div>
            <div className='flex flex-col w-full items-center'>
                <span className='text-lg font-semibold'>{label}</span>
                <p className='flex gap-2 text-white/70'>
                    <span>
                        {experience}
                        {showPlusLabel && '+'}
                    </span>
                    {experienceTime === "Year" && <span>year{experience > 1 && 's'}</span>}
                    {experienceTime === "Month" && <span>month{experience > 1 && 's'}</span>}
                </p>
            </div>
        </div>
    )
}

export default SkillCard