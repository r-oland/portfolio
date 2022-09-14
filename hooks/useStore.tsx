// Components==============
import { AnkerType } from 'global_components/Anker/Anker';
import create from 'zustand';
// =========================

type StoreTypes = {
  anker: AnkerType;
  setAnker: (id: AnkerType) => void;
};

export const useStore = create<StoreTypes>((set) => ({
  anker: 'introduction',
  setAnker: (id) => set({ anker: id }),
}));
