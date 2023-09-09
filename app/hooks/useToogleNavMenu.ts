import { create } from 'zustand';

interface ToogleNavMenuStore {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const useToogleNavMenuStore = create<ToogleNavMenuStore>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => set({ isOpen })
}));

export default useToogleNavMenuStore;