import { Box, Button, HStack, Text, VStack } from "@kuma-ui/core";
import { CornersOut, Minus, X } from "@phosphor-icons/react";
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
    <Box
      width="100%"
      height="100vh"
      background="colors.black"
      color="colors.white"
    >
      <HStack
        width="100%"
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        padding="spacings.md"
      >
        <VStack>
          <Text as="p" fontSize={12}>
            ElectroStatic
          </Text>
          <Text as="p" fontSize={10} color="gray">
            {appVer}
          </Text>
        </VStack>
        <Box display="flex" flex={1} padding={10} id="drag-region"/>
        <HStack
          alignContent="center"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Button
            onClick={() => minimizeWindow()}
          >
            <Minus />
          </Button>
          <Button
            onClick={() => maximizeWindow()}
          >
            <CornersOut />
          </Button>
          <Button
            onClick={() => closeWindow()}
          >
            <X />
          </Button>
        </HStack>
      </HStack>
      {children}
    </Box>
  );
}
