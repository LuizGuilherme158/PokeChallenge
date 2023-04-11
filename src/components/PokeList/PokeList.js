import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box, Button } from '@chakra-ui/react';
import { drawPokemonOptionList } from 'components/PokemonOptions';
import Buttons from './Pagination';

export default function PokeList(props) {
  const favorites = useSelector(state => state.favorites);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const { pokemons } = props;
  return (
    <Flex
      position="relative"
      flexDir="column"
      overflowY="scroll"
      overflowX="hidden"
      borderTop="4px"
      borderRight="4px"
      borderBottom="4px"
      borderTopRightRadius="8px"
      borderBottomRightRadius="8px"
      borderColor="black"
      h="100%"
      w="100%"
      maxW="400px"
      px="8"
      pb="8"
      bg="var(--main-bg-color)"
      minW="400px"
    >
      <Flex justify="space-between">
        <Button
          border="2px"
          borderColor="black"
          bg="white"
          p="2"
          w="fit-content"
          my="2"
          onClick={() => setIsFavorite(false)}
        >
          &nbsp;All PKMs&nbsp;
        </Button>
        <Button
          border="2px"
          borderColor="black"
          bg="white"
          p="2"
          w="fit-content"
          my="2"
          onClick={() => setIsFavorite(true)}
        >
          &nbsp;Favorites&nbsp;
        </Button>
      </Flex>
      <Box position="absolute" top="62px" bottom="166px" left="39px" right="39px" className="crt"></Box>
      <Flex
        position="relative"
        flexDir="column"
        alignItems="center"
        border="4px"
        borderRadius="8px"
        borderColor="black"
        px="2"
        overflowY="scroll"
        overflowX="hidden"
        maxH="100%"
        minH="616px"
        className="bg crt-txt"
      >
        {isFavorite
          ? favorites.map(drawPokemonOptionList)
          : pokemons.map(drawPokemonOptionList)}
      </Flex>
      <Buttons />
    </Flex>
  );
}
