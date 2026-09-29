import { QueryClient } from "@tanstack/react-query";
import { createTRPCReact } from "@trpc/react-query";
import { ipcLink } from "trpc-electron/renderer";
import type { AppRouter } from "./routers/_app";

const t = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "always",
      staleTime: Number.POSITIVE_INFINITY,
    },
    mutations: {
      networkMode: "always",
    },
  },
});

export const trpcClient = t.createClient({
  links: [ipcLink()],
});

export default t;
