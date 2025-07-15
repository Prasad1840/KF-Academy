import { create } from "zustand";

type PodFilterStore = {
  selectedPod: string;
  setSelected: (name: string) => void;
  clearSelectedPod: () => void;
};

export const usePodFilterStore = create<PodFilterStore>((set) => ({
  selectedPod: "",
  setSelected: (name: string) => {
    set({ selectedPod: name });
  },
  clearSelectedPod: () => {
    set({ selectedPod: "" });
  },
}));
