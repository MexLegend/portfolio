import { create } from 'zustand'
import { Gradient } from '../types/gradient';
import { gradients } from '../mocks/gradients';

interface ActiveGradientStore {
    activeGradientIndex: number;
    nextGradientIndex: number;
    activeGradient: Gradient;
    setActiveGradientIndex: () => void;
}

const useActiveGradientStore = create<ActiveGradientStore>((set) => ({
    activeGradientIndex: 0,
    nextGradientIndex: 1,
    activeGradient: gradients[0],
    setActiveGradientIndex: () => set(({ activeGradientIndex, nextGradientIndex }) => {

        const activeGradient = (activeGradientIndex + 1) % gradients.length;
        const nextGradient = (nextGradientIndex + 2) % gradients.length;

        return {
            activeGradientIndex: activeGradient,
            nextGradientIndex: nextGradient,
            activeGradient: gradients[nextGradient]
        }

    })
}));

// Call "setActiveGradientIndex" every 3 seconds
setInterval(() => {
    const { setActiveGradientIndex } = useActiveGradientStore.getState();
    setActiveGradientIndex();
}, 3333);

export default useActiveGradientStore;