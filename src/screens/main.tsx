import { Heading, HStack, Stack, SimpleGrid } from "@chakra-ui/react";
import { MovieCard } from "../components/movie-card";

import { useMovies } from "../hooks/useMovies";
import { ColorMode } from "../theme/color-mode";

const MainScreen = () => {
  const movies = useMovies();
  return (
    <>
      <Stack h="full" w="full" align="center" p={4}>
        <HStack w="full" justify="flex-end" spacing={0}>
          <ColorMode />
        </HStack>
        <Heading>2Coders Movies</Heading>
        <SimpleGrid
          pt={4}
          px={{ base: 6, md: 5, "2xl": 10 }}
          spacingY={{ base: 5, lg: 10 }}
          spacingX={{ base: 3, lg: 5, "2xl": 10 }}
          w="full"
          columns={[1, 2, 3, 2, 4]}
        >
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </SimpleGrid>
      </Stack>
    </>
  );
};

export { MainScreen };
