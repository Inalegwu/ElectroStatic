import { Box, Button, Text } from "@kuma-ui/core";
import { FallbackProps } from "react-error-boundary";

function ErrorBoundaryFallBack(props: FallbackProps) {
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
      background="colors.black"
      color="colors.white"
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
      </Box>
      <Button
        width="50%"
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
