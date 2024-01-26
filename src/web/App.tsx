import {
  NotFoundRoute,
  RouterProvider,
  createRouter,
} from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { configureObservablePersistence } from "@legendapp/state/persist";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { queryClient, trpc, trpcClient } from "@shared/config";
import { QueryClientProvider } from "@tanstack/react-query";

import "./App.css";

enableReactTracking({
  auto: true,
});

configureObservablePersistence({
  pluginLocal: ObservablePersistLocalStorage,
});

import { routeTree } from "./routeTree.gen";
import { Route as rootRoute } from "./routes/__root";

import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import "virtual:uno.css";

const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => "404 not found",
});

const router = createRouter({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root");

if (!rootElement?.innerHTML) {
  const root = ReactDOM.createRoot(rootElement!);

  root.render(
    <StrictMode>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <Theme
            appearance="dark"
            radius="medium"
            accentColor="mint"
            grayColor="slate"
          >
            <RouterProvider router={router} />
          </Theme>
        </QueryClientProvider>
      </trpc.Provider>
    </StrictMode>,
  );
}
