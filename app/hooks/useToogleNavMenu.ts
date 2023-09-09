import { create } from 'zustand';

interface ToogleNavMenuStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useToogleNavMenuStore = create<ToogleNavMenuStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set((state) => {

        if (isOpen) document.querySelector('body')!.style.overflow = 'hidden';
        else document.querySelector('body')!.style.overflow = 'auto';

        return { ...state, isOpen }
    })
}));

export default useToogleNavMenuStore;