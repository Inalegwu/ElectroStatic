declare global {
  export type GlobalState = {
    colorMode: 'dark' | 'light';
    firstLaunch: boolean;
    appId: string | null;
    toggleColorMode: () => void;
    updateFirstLaunch: () => void;
    setAppId: (id: string) => void;
    clearAppId: () => void;
  };
}

export type {};
