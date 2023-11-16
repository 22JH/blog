import { create } from "zustand";

interface storeType {
  selectedCategory: string;
  setSelectedCategory: (select: string) => void;
}

const pageStore = create<storeType>((set) => ({
  selectedCategory: "",
  setSelectedCategory: (select: string) => {
    set(() => ({ selectedCategory: select }));
  },
}));

export default pageStore;
