import place from "@assets/images/place.jpg";
import { Icon } from "@components/index";
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
      className="h-screen w-full overflow-y-scroll"
    >
      <img src={place} alt="placeholder" className="w-full h-5/6" />
      <Box className="w-full flex flex-col items-start px-3 py-2">
        <Flex direction="column" align="start" className="mb-3 -space-y-2">
          <Text className="text-[39px] font-bold tracking-wide">
            Electrostatic
          </Text>
          <Text className="text-[25px] font-bold">
            Get up an running with an Electron app in minutes instead of hours
          </Text>
        </Flex>
        <Text className="text-[18px] font-medium">
          Open
          <Code className="ml-2 mr-2 px-1 py-1 mb-1 text-sm" color="gray">
            src/web/routes/index.lazy.tsx
          </Code>
          and make your first changes
        </Text>
        <ul className="list-circle text-sm p-4 space-y-3">
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/web/routes
            </Code>
            is where pages of your app lives
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/routers
            </Code>
            is where all your api's live
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/schema
            </Code>
            is where your database schemas live
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/config.ts
            </Code>
            this file defines your query client and trpc config , don't change
            if you dont have to
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/context.ts
            </Code>
            your trpc context is defined here , changes here are on the{" "}
            <Code className="ml-2 mr-2 mb-1 text-sm" color="gray">
              ctx
            </Code>
            object of your procedures
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/shared/storage.ts
            </Code>
            your database connection is here
          </li>
          <li className="text-[16px]">
            <Code className="mr-2 px-3 py-1 mb-1 text-sm" color="gray">
              src/global.d.ts
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
          View on Gitub <Icon name="Github" />
        </Button>
      </Box>
    </Flex>
  );
}
