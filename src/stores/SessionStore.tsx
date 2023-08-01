import create from "zustand";
import { persist } from "zustand/middleware";

type SessionStoreProps = {
  name: string;
  email: string;
  token: string;
  setName: (e: string) => void;
  setEmail: (e: string) => void;
  setToken: (e: string) => void;
};

export const useSessionStore = create<SessionStoreProps>()(
  persist(
    (set) => ({
      name: undefined,
      email: undefined,
      token: undefined,
      setName: (e) => set(() => ({ name: e })),
      setEmail: (e) => set(() => ({ email: e })),
      setToken: (e) => set(() => ({ token: e })),
    }),
    {
      name: "ITRsession",
      getStorage: () => localStorage,
    }
  )
);
