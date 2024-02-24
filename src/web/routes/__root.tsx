import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Layout } from "../components";

export const Route = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </Layout>
  ),
});
