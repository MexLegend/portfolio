'use client';

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavLinks from "./NavLinks";
import useToogleNavMenuStore from "../hooks/useToogleNavMenu";
import { useEffect } from "react";

const NavMenu = () => {

    const { isOpen, setIsOpen } = useToogleNavMenuStore((state) => state);

    const toogleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleWindowResize = () => {
        if (window.innerWidth > 768) setIsOpen(false);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

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
                fixed 
                left-0
                top-0
                items-end 
                justify-end 
                h-screen
                w-screen
                transition 
                duration-300
                ease-in
                -z-10
                bg-dark-blue
                ${isOpen ? 'translate-y-0' : '-translate-y-full'}
            `}>
                <div className="flex items-center justify-center w-full py-24 h-full">
                    <NavLinks direction="Vertical" />
                </div>
            </div>
        </>
    )
}

export default NavMenu