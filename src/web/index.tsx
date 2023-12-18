import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

import { App } from "./App";
import "./App.css";
import { queryClient, trpc, trpcClient } from "@shared/config";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";

// attach auto tracking for legend state
// this allows components to rerender when proxy state changes
enableReactTracking({
  auto: true,
});

createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);
