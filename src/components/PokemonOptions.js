import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { SelectedPokemonContext } from 'context/SelectedPokemonContext';

export const drawPokemonOptionList = (pkm, i) => {
  return <PokemonOption key={i} pkm={pkm} />;
};

function PokemonOption({ pkm }) {
  const id = pkm.url
    .replace('https://pokeapi.co/api/v2/pokemon/', '')
    .replace('/', '');
  const { setSelectedPokemon } = React.useContext(SelectedPokemonContext);
  return (
    <Button
      justifyContent="space-between"
      h="auto"
      w=""
      radii="lg"
      my="2"
      p="0"
      maxW="318px"
      onClick={() => setSelectedPokemon(pkm)}
    >
      <img
        alt="pokemonSprite"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <Flex flexDirection="column">
        <span>PKM ID. {id}</span>
        <span>{pkm.name}</span>
      </Flex>
      <img
        alt="pokemonSpriteBack"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
      />
    </Button>
  );
}
