import place from "@assets/images/place.jpg";
import { GithubLogo } from "@phosphor-icons/react";
import { Box, Button, Code, Flex, Text } from "@radix-ui/themes";
import t from "@shared/config";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { mutate: openGithub } = t.gh.useMutation();

  return (
    <Flex
      grow="1"
      direction="column"
      className="h-screen w-full overflow-y-scroll pb-14"
      gap="4"
      p="2"
    >
      <img src={place} alt="placeholder" className="w-full h-4/6 rounded-lg" />
      <Box className="w-full flex flex-col items-start space-y-1">
        <Text size="8" className="font-medium">
          Welcome to the Electrostatic starter template
        </Text>
        <Text className="text-sm">
          Get up an running with an Electron app in minutes instead of hours
        </Text>
        <Text className="text-xxs">
          Open
          <Code className="ml-2 mr-2 px-1 py-1 mb-1 text-sm" color="gray">
            src/web/routes/index.lazy.tsx
          </Code>
          and make your first changes
        </Text>
        <ul className="list-circle text-sm p-4 space-y-3">
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/web/routes
            </Code>
            is where pages of your app lives
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/routers
            </Code>
            is where all your api's live
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/schema
            </Code>
            is where your database schemas live
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/config.ts
            </Code>
            this file defines your query client and trpc config , don't change
            if you dont have to
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/context.ts
            </Code>
            your trpc context is defined here , changes here are on the{" "}
            <Code className="ml-2 mr-2 mb-1 text-sm" color="gray">
              ctx
            </Code>
            object of your procedures
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/storage.ts
            </Code>
            your database connection is here
          </li>
          <li>
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/types.ts
            </Code>
            all your custom types could live here
          </li>
        </ul>
        <Button
          onClick={() => openGithub()}
          className="w-full p-6 cursor-pointer"
          variant="soft"
          radius="large"
        >
          View on Gitub <GithubLogo />
        </Button>
      </Box>
    </Flex>
  );
}
