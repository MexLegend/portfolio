'use client';

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./NavLinks";
import useToogleNavMenuStore from "../hooks/useToogleNavMenu";
import useActiveLinkStore from "../hooks/useActiveLink";

const NavMenu = () => {

    const { isOpen, setIsOpen } = useToogleNavMenuStore((state) => state);
    const { scrollOffset } = useActiveLinkStore((state) => state);

    const toogleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <button className={`
                hidden
                max-md:block
                transition 
                duration-200 
                text-2xl
                active:scale-95 
                text-white/70 
                hover:text-white
                `}
                onClick={toogleIsOpen}
            >
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <div className={`
                hidden
                absolute 
                left-0
                items-end 
                justify-end 
                ${scrollOffset >= 80 ? 'h-[calc(100vh-80px)] top-[80px]' : 'h-[calc(100vh-64px)] top-[64px]'}
                w-screen 
                bg-indigo-950/80 
                ${isOpen ? 'max-md:flex' : 'hidden'}
            `} onClick={toogleIsOpen}>
                <div className="flex items-center justify-center w-full pt-4 mt-20 h-full bg-dark-blue">
                    <NavLinks direction="Vertical" />
                </div>
            </div>
        </>
    )
}

export default NavMenu