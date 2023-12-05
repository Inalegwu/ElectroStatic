import { Box, Button, Text } from "@kuma-ui/core";
import { trpc } from "@src/shared/config";
import { GithubLogo } from "@phosphor-icons/react";

export const App = () => {
  const { data: appVer } = trpc.version.useQuery();

  return (
    <Box
      width="100%"
      height="100vh"
      background="colors.black"
      display="flex"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      color="colors.white"
    >
      <Box>
        <Text>Snazzy Name of Starter Template Goes Here...</Text>
        <Text as="h3" fontStyle="normal" fontSize={30}>
          Version {appVer}
        </Text>
        <Button background="colors.red.100" color="colors.white">
          <GithubLogo size={15} />
        </Button>
      </Box>
    </Box>
  );
};
