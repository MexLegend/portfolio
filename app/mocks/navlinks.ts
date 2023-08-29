import { NavLink } from "../types/navlink";
import { Gradient } from '../types/gradient';
import { gradients } from "./gradients";

export const navLinks: NavLink[] = [
    {
        label: "Home",
        href: "#home",
        gradient: gradients[0]
    },
    {
        label: "Experience",
        href: "#experience",
        gradient: gradients[0]
    },
    {
        label: "Projects",
        href: "#projects",
        gradient: gradients[1]
    },
    {
        label: "Contact",
        href: "#contact",
        gradient: gradients[2]
    }
];