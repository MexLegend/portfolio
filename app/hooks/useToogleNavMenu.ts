import { create } from 'zustand';

interface ToogleNavMenuStore {
    isOpen: boolean;
    screenWidth: number,
    setIsOpen: (isOpen: boolean) => void;
    setScreenWidth: (screenWidth: number) => void;
}

const useToogleNavMenuStore = create<ToogleNavMenuStore>((set) => ({
    isOpen: false,
    screenWidth: 0,
    setIsOpen: (isOpen) => set((state) => {

        if (isOpen) document.querySelector('body')!.style.overflow = 'hidden';
        else document.querySelector('body')!.style.overflow = 'auto';

        return { ...state, isOpen}
    }),
    setScreenWidth: (screenWidth) => set({ screenWidth })
}));

export default useToogleNavMenuStore;