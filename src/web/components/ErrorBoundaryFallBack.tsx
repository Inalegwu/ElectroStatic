import { Button, Flex, Text } from "@radix-ui/themes";
import { FallbackProps } from "react-error-boundary";

function ErrorBoundaryFallBack(props: FallbackProps) {
  return (
    <Flex
      width="100%"
      grow="1"
      direction="column"
      display="flex"
      align="center"
      justify="center"
    >
      <Flex width="100%" align="center" justify="between">
        <Text>Something went wrong</Text>
      </Flex>
      <Flex direction="column" align="start" gap="4">
        <Text color="red">Oops, Something Broke</Text>
        <Text>{props.error.message}</Text>
      </Flex>
      <Button radius="medium" onClick={() => props.resetErrorBoundary()}>
        <Text>Reload The App</Text>
      </Button>
    </Flex>
  );
}

export default ErrorBoundaryFallBack;
