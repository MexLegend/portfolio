import { Skill } from "../types/skill";
import { } from 'react-icons/bs';
import { FaReact, FaAngular, FaNodeJs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoFlutter, BiLogoJavascript, BiLogoTypescript, BiLogoMongodb } from 'react-icons/bi';
import { SiNestjs } from 'react-icons/si';
import { DiMysql } from 'react-icons/di';

export const skills: Skill[] = [
    {
        label: "React",
        experience: 3,
        experienceTime: "Year",
        icon: FaReact
    },
    {
        label: "NextJS",
        experience: 6,
        experienceTime: "Month",
        icon: TbBrandNextjs
    },
    {
        label: "Angular",
        experience: 4,
        experienceTime: "Year",
        showPlusLabel: true,
        icon: FaAngular
    },
    {
        label: "Fluter",
        experience: 1,
        experienceTime: "Year",
        showPlusLabel: true,
        icon: BiLogoFlutter
    },
    {
        label: "JavaScript",
        experience: 2,
        experienceTime: "Year",
        icon: BiLogoJavascript
    },
    {
        label: "TypeScript",
        experience: 4,
        experienceTime: "Year",
        showPlusLabel: true,
        icon: BiLogoTypescript
    },
    {
        label: "Node",
        experience: 4,
        experienceTime: "Year",
        showPlusLabel: true,
        icon: FaNodeJs
    },
    {
        label: "NestJs",
        experience: 6,
        experienceTime: "Month",
        icon: SiNestjs
    },
    {
        label: "MongoDB",
        experience: 5,
        experienceTime: "Year",
        icon: BiLogoMongodb
    },
    {
        label: "MySQL",
        experience: 2,
        experienceTime: "Year",
        showPlusLabel: true,
        icon: DiMysql
    }
]