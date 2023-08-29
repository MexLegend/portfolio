import { create } from 'zustand';
import { NavLink } from '../types/navlink';

interface NavLinkWithIndicatorProps extends NavLink {
    width: string;
    translateX: string;
}

interface ActiveLinkStore {
    activeLink: NavLinkWithIndicatorProps | undefined;
    scrollOffset: number;
    setActiveLink: (navLink: NavLinkWithIndicatorProps | undefined) => void;
    setScrollOffset: (offset: number) => void;
}

const useActiveLinkStore = create<ActiveLinkStore>((set) => ({
    activeLink: undefined,
    scrollOffset: 0,
    setActiveLink: (navLink) => set({ activeLink: navLink }),
    setScrollOffset: (offset) => set({ scrollOffset: offset })
}));

export default useActiveLinkStore;