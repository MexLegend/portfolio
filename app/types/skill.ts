import { IconType } from "react-icons";

type ExperienceTime = "Year" | "Month";

export type Skill = {
    icon: IconType;
    label: string;
    experience: number;
    experienceTime: ExperienceTime;
    showPlusLabel?: boolean;
} 