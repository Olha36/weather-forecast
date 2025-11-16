'use client';

import { create } from 'zustand';

interface AuthStore {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value) => set({ isLoggedIn: value }),
}));
