import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

type Selected = {
  title: string;
  child: string;
};

type SelectedStore = {
  selected: Selected;
  setSelected: (value: Selected) => void;
  setTitle: (title: string) => void;
  setChild: (child: string) => void;
};

export const useReactStore = create<SelectedStore>()(
        (set) => ({
            selected: {
                title: 'python',
                child: '',
            },
            setSelected: (value) => set({ selected: value }),
            setChild: (child) => set((state) => ({
                selected: {
                ...state.selected,
                child,
                },
            })),
            setTitle: (title) => set((state) => ({
                selected: {
                ...state.selected,
                title,
                },
            })),
        }),
);
