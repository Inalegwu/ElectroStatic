import { CornersOut, Minus } from "@phosphor-icons/react";
import { X } from "@phosphor-icons/react/dist/ssr";
import { Flex, Text } from "@radix-ui/themes";
import t from "@shared/config";
import type React from "react";
import { useEffect } from "react";
import { globalState$ } from "../state";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const { data: appVer } = t.version.useQuery();
  const { mutate: minimizeWindow } = t.window.minimize.useMutation();
  const { mutate: maximizeWindow } = t.window.maximize.useMutation();
  const { mutate: closeWindow } = t.window.closeWindow.useMutation();

  useEffect(() => {
    if (globalState$.colorMode.get() === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <Flex width="100%" direction="column" grow="1" className="transition">
      <Flex
        align="center"
        justify="between"
        width="100%"
        className="absolute top-0 left-0 px-2 py-2"
      >
        <Text className="text-neutral-300 font-extrabold tracking-wide font-[15px]">
          ElectroStatic
        </Text>
        <Flex id="drag-region" p="1" grow="1" />
        <Flex align="center" justify="end" gap="5">
          <button className="text-neutral-50" onClick={() => minimizeWindow()}>
            <Minus size={10} />
          </button>
          <button className="text-neutral-50" onClick={() => maximizeWindow()}>
            <CornersOut size={10} />
          </button>
          <button onClick={() => closeWindow()} className="text-red-600">
            <X size={10} />
          </button>
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}
