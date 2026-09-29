import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useGlobalState = create<GlobalState>()(
  persist(
    (set) => ({
      appId: null,
      colorMode: 'light',
      isFullscreen: false,
      lastOpenedTab: 'issues',
      firstLaunch: true,
      toggleColorMode: () =>
        set((state) => ({
          ...state,
          colorMode: state.colorMode === 'dark' ? 'light' : 'dark',
        })),
      updateFirstLaunch: () =>
        set((state) => ({ ...state, firstLaunch: !state.firstLaunch })),
      setAppId: (id) => set((state) => ({ ...state, appId: id })),
      clearAppId: () => set((state) => ({ ...state, appId: null })),
    }),
    {
      name: 'global__state',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
