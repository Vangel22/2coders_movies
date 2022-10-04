import { Badge, Box, HStack, Image, Text, Tooltip } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { format } from "date-fns";

import { Movie } from "../models/movie";
import noImage from "../images/no-image.png";
import { AdultIcon } from "../custom-icons/adult-icon";

type MovieProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieProps) => {
  const today = format(Date.now(), "dd MM yyyy");

  function newMovie() {
    const movieMonth = movie.release_date.toString().split("-");
    const currentMonth = today.split(" ");
    if (movieMonth[1] === currentMonth[1]) {
      return true;
    }
    return false;
  }

  return (
    <Box
      bgColor="blackAlpha.200"
      key={movie.id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p={2} mt="1" fontWeight="semibold" lineHeight="tight" noOfLines={1}>
        <HStack w="full" justify="center">
          <Text fontSize="xl">{movie.original_title}</Text>
          {movie.adult && <AdultIcon />}
        </HStack>
      </Box>
      <Image src={movie.poster_path} fallbackSrc={noImage} alt="Movie image" />
      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          {newMovie() ?? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          )}
          <Box
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            <HStack noOfLines={3}>
              <Text>Overview :</Text>
              <Tooltip label={movie.overview}>
                <Text color="gray.400">{movie.overview}</Text>
              </Tooltip>
            </HStack>
          </Box>
        </Box>
        <HStack w="full">
          <Text>Release Date: </Text>
          <Text fontWeight="bold" color="teal.500">
            {movie.release_date.toString()}
          </Text>
        </HStack>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill(" ")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < movie.vote_count ? "yellow.500" : "yellow.600"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {movie.vote_average}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { MovieCard };
