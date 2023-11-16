import { create } from "zustand";
import { SelectOption } from "../types/category.type";

interface storeType {
  thumbnail: string;
  previewContent: string;
  categories: SelectOption[];
  selectCategory: SelectOption[];
  setThumbnail: (select: string) => void;
  setPreviewContent: (select: string) => void;
  setCategories: (select: SelectOption[]) => void;
  setSelectCategory: (select: SelectOption[]) => void;
}

const postStore = create<storeType>((set) => ({
  thumbnail: "",
  previewContent: "", //
  categories: [], //
  selectCategory: [],
  setThumbnail: (select: string) => {
    set(() => ({ thumbnail: select }));
  },
  setPreviewContent: (select: string) => {
    //
    set(() => ({ previewContent: select }));
  },
  setCategories: (select: SelectOption[]) => {
    set((store) => ({ categories: [...store.categories, ...select] }));
  },
  setSelectCategory: (select: SelectOption[]) => {
    //
    set((store) => ({ categories: [...store.selectCategory, ...select] }));
  },
}));

export default postStore;
