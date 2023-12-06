import { trpc } from "@src/shared/config";
import { Layout } from "@components/index";
import { GithubLogo } from "@phosphor-icons/react";
import { Box, Button, HStack, Input, Text, VStack } from "@kuma-ui/core";

export const App = () => {
  const { mutate: openGithub } = trpc.openGithub.useMutation();
  const { data: movies } = trpc.movie.getMovies.useQuery();

  return (
    <Layout>
      <VStack
        width="100%"
        height="100%"
        alignContent="center"
        alignItems="center"
      >
        <HStack flex={1} width="100%">
          <VStack
            width="30%"
            padding="spacings.md"
            alignContent="flex-start"
            alignItems="flex-start"
          >
            {movies?.movies.map((v) => {
              return (
                <Box background="colors.primary.100" padding="spacings.md">
                  <Text>{v.name}</Text>
                  <Text>{v.releaseYear}</Text>
                </Box>
              );
            })}
          </VStack>
          <VStack
            width="70%"
            padding="spacings.lg"
            alignContent="flex-start"
            alignItems="flex-start"
            justifyContent="center"
            gap="spacings.md"
          >
            <Text width="90%" as="label">
              Movie Name
            </Text>
            <Input
              width="90%"
              borderRadius="radii.md"
              type="text"
              placeholder="Movie Name"
              padding="spacings.lg"
            />
            <Button
              width="90%"
              padding="spacings.lg"
              borderRadius="radii.md"
              type="submit"
            >
              Save Movie
            </Button>
          </VStack>
        </HStack>
        <HStack width="100%" padding="spacings.lg">
          <Button
            display="flex"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            color="colors.black"
            padding="spacings.lg"
            borderRadius="radii.md"
            onClick={() => openGithub()}
            title="Open ElectroStatic Github page"
            _hover={{ background: "colors.primary.100", color: "colors.white" }}
          >
            <GithubLogo />
          </Button>
        </HStack>
      </VStack>
    </Layout>
  );
};
