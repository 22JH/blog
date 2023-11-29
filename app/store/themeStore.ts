import { create } from "zustand";

interface storeType {
  isDark: boolean;
  setIsDark: (select: boolean) => void;
}

const themeStore = create<storeType>((set) => ({
  isDark: true,
  setIsDark: (select) => {
    set(() => ({ isDark: select }));
  },
}));

export default themeStore;
