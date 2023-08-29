import { IconType } from "react-icons";

export type Project = {
    name: string;
    thumbnail: string;
    description: string;
    frameworkIcon: IconType;
    codeLink: string;
    demoLink: string;
}