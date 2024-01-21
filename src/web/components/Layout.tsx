import { CornersOut, Minus, X } from "@phosphor-icons/react";
import { Button, Flex, Text } from "@radix-ui/themes";
import { trpc } from "@src/shared/config";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { data: appVer } = trpc.version.useQuery();
  const { mutate: minimizeWindow } = trpc.window.minimize.useMutation();
  const { mutate: maximizeWindow } = trpc.window.maximize.useMutation();
  const { mutate: closeWindow } = trpc.window.closeWindow.useMutation();

  return (
    <Flex width="100%" direction="column" grow="1">
      <Flex grow="1" px="3" py="2">
        <Flex direction="column">
          <Text size="1">ElectroStatic</Text>
          <Text size="1">{appVer}</Text>
        </Flex>
        <Flex grow="1" id="drag-region" />
        <Flex align="center" gap="4" justify="end" className="px-2">
          <Button variant="ghost" onClick={() => minimizeWindow()}>
            <Minus />
          </Button>
          <Button onClick={() => maximizeWindow()} variant="ghost">
            <CornersOut />
          </Button>
          <Button onClick={() => closeWindow()} variant="ghost">
            <X />
          </Button>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}
