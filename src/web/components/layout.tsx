import { CornersOut, Minus, X } from "@phosphor-icons/react";
import { Button, Flex, Text } from "@radix-ui/themes";
import t from "@shared/config";
import type React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { data: appVer } = t.version.useQuery();
  // window controls
  const { mutate: minimizeWindow } = t.window.minimize.useMutation();
  const { mutate: maximizeWindow } = t.window.maximize.useMutation();
  const { mutate: closeWindow } = t.window.closeWindow.useMutation();

  return (
    <Flex width="100%" direction="column" grow="1" className="transition">
      <Flex grow="1" px="2" py="2">
        <Flex direction="column">
          <Text className="text-xs ">Electrostatic</Text>
          <Text className="text-xs" color="gray">
            {appVer}
          </Text>
        </Flex>
        <Flex grow="1" id="drag-region" />
        <Flex align="center" gap="4" justify="end" className="px-2">
          <Button variant="ghost" onClick={() => minimizeWindow()} color="gray">
            <Minus />
          </Button>
          <Button onClick={() => maximizeWindow()} variant="ghost" color="gray">
            <CornersOut />
          </Button>
          <Button onClick={() => closeWindow()} variant="ghost" color="red">
            <X />
          </Button>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}
