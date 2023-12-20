import { Layout } from "@components/index";
import { Button, Text, VStack } from "@kuma-ui/core";
import { GithubLogo } from "@phosphor-icons/react";
import { trpc } from "@src/shared/config";

export default function Home() {
  const { mutate: openGithub } = trpc.gh.useMutation();

  return (
    <Layout>
      <VStack
        width="100%"
        height="100%"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
      >
        <Text as="h4">ElectroStatic Starter</Text>
        <Button onClick={() => openGithub()}>
          <GithubLogo />
        </Button>
      </VStack>
    </Layout>
  );
}
