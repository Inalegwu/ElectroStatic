import React from "react";
import { Box, Button, HStack, Text } from "@kuma-ui/core";
import { trpc } from "@src/shared/config";
import { CornersOut, Minus, X } from "@phosphor-icons/react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
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
      {/* title bar */}
      <Box
        height="5%"
        width="100%"
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
        padding="spacings.sm"
      >
        <HStack
          alignContent="flex-end"
          alignItems="flex-end"
          justifyContent="flex-start"
        >
          <Text as="h4">ElectroStatic</Text>
          <Text fontSize={11} as="p" color="gray">
            {appVer}
          </Text>
        </HStack>
        <HStack
          alignContent="center"
          alignItems="center"
          justifyContent="flex-end"
          gap="spacings.sm"
        >
          <Button
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            padding="spacings.md"
            display="flex"
            color="colors.white"
            border="none"
            background="none"
            onClick={() => minimizeWindow()}
          >
            <Minus size={13} />
          </Button>
          <Button
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            padding="spacings.md"
            display="flex"
            color="colors.white"
            border="none"
            background="none"
            onClick={() => maximizeWindow()}
          >
            <CornersOut />
          </Button>
          <Button
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            padding="spacings.md"
            display="flex"
            color="colors.white"
            border="none"
            background="none"
            onClick={() => closeWindow()}
          >
            <X />
          </Button>
        </HStack>
      </Box>
      <Box width="100%" height="95%">
        {props.children}
      </Box>
    </Box>
  );
}
