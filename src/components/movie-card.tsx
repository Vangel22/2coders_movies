import { Badge, Box, Image } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { format } from "date-fns";

import { Movie } from "../models/movie";
import noImage from "../images/no-image.png";

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
      key={movie.id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={movie.poster_path} fallbackSrc={noImage} alt="Movie image" />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          {newMovie() ?? (
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          )}
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {movie.genre_ids}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {movie.original_title}
        </Box>
        <Box>{movie.release_date.toString()}</Box>
        <Box display="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < movie.vote_count ? "teal.500" : "gray.300"}
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
