import { create } from "zustand";
import { persist } from "zustand/middleware";

type SessionStoreProps = {
  email: string;
  token: string;
  setEmail: (e: string) => void;
  setToken: (e: string) => void;
};

export const useSessionStore = create<SessionStoreProps>()(
  persist(
    (set) => ({
      email: undefined,
      token: undefined,
      setEmail: (e) => set(() => ({ email: e })),
      setToken: (e) => set(() => ({ token: e })),
    }),
    {
      name: "simplifica-itr-session",
      getStorage: () => sessionStorage,
    }
  )
);
