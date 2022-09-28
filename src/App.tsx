import { VStack, Heading } from "@chakra-ui/react";

function App() {
  return (
    <VStack h="full" w="full" p={24}>
      <VStack h="full" w="full" bg="red">
        <Heading>2Coders Movies</Heading>
      </VStack>
    </VStack>
  );
}

export { App };
//https://api.themoviedb.org/3/movie/popular?api_key=77ed937bcbac4cb5d296b37525175570