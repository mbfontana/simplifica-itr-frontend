import create from "zustand";

export const useSessionStore = create(() => ({
  credentials: {
    id: "",
    name: "",
    email: "",
  },
  token: "",
}));
