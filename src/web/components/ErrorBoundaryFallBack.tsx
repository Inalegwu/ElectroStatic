import { Box, Button, Text } from "@kuma-ui/core";
import { FallbackProps } from "react-error-boundary";
import { globalState$ } from "@state/index";

function ErrorBoundaryFallBack(props: FallbackProps) {
  const uiState = globalState$.get();

  return (
    <Box
      width="100%"
      height="100"
      flex={1}
      display="flex"
      flexDir="column"
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      background={
        uiState.colorMode === "light" ? "colors.white" : "colors.black"
      }
      color={uiState.colorMode === "light" ? "colors.black" : "colors.white"}
      fontSize={uiState.fontSize}
    >
      <Box
        width="100%"
        padding="spacings.md"
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text as="h4" fontSize={11}>
          Something went wrong
        </Text>
        <Box
          display="flex"
          alignContent="center"
          alignItems="center"
          justifyContent="flex-end"
        ></Box>
      </Box>
      <Box
        display="flex"
        flexDir="column"
        alignContent="flex-start"
        alignItems="flex-start"
        gap="spacings.md"
      >
        <Text as="h3" color="colors.error">
          Oops, Something Broke
        </Text>
        <Text as="p" fontSize={13}>
          {props.error.message}
        </Text>
        B
      </Box>
      <Button
        width="50%"
        background="colors.primary.100"
        padding="spacings.xl"
        borderRadius="radii.md"
        onClick={() => props.resetErrorBoundary()}
      >
        <Text>Reload The App</Text>
      </Button>
    </Box>
  );
}

export default ErrorBoundaryFallBack;
