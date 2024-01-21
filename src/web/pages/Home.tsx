import { Layout } from "@components/index";
import { GithubLogo } from "@phosphor-icons/react";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { trpc } from "@src/shared/config";

export default function Home() {
  const { mutate: openGithub } = trpc.gh.useMutation();

  return (
    <Layout>
      <Flex
        grow="1"
        direction="column"
        className="h-screen w-full"
        align="center"
        justify="center"
      >
        <Heading>ElectroStatic Starter &copy; 2024</Heading>
        <Button variant="soft" onClick={() => openGithub()}>
          <GithubLogo />
        </Button>
      </Flex>
    </Layout>
  );
}
