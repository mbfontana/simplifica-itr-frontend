import { create } from "zustand";
import { persist } from "zustand/middleware";

type SessionStoreProps = {
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  setFirstName: (e: string) => void;
  setLastName: (e: string) => void;
  setEmail: (e: string) => void;
  setToken: (e: string) => void;
  clear: () => void;
};

export const useSessionStore = create<SessionStoreProps>()(
  persist(
    (set) => ({
      firstName: undefined,
      lastName: undefined,
      email: undefined,
      token: undefined,
      setFirstName: (e) => set(() => ({ firstName: e })),
      setLastName: (e) => set(() => ({ lastName: e })),
      setEmail: (e) => set(() => ({ email: e })),
      setToken: (e) => set(() => ({ token: e })),
      clear: () =>
        set(() => ({
          firstName: undefined,
          lastName: undefined,
          email: undefined,
          token: undefined,
        })),
    }),
    {
      name: "simplifica-itr-session",
      getStorage: () => sessionStorage,
    }
  )
);
