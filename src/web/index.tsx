import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { configureObservablePersistence } from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { queryClient, trpc, trpcClient } from "@shared/config";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";

// attach auto tracking for legend state
// this allows components to rerender when proxy state changes
enableReactTracking({
  auto: true,
});

// enable persisting of state options to
// local storage. Options for IndexedDB , SessionStorage
// end remote options are available
configureObservablePersistence({
  pluginLocal:ObservablePersistLocalStorage
})

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);
