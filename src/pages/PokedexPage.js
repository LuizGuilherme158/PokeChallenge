import React from 'react';
import { getPokemons } from 'api';
import { Flex } from '@chakra-ui/react';
import PokeDex from 'components/PokeDex/PokeDex';
import PokeList from 'components/PokeList/PokeList';
import { SelectedPokemonContext } from 'context/SelectedPokemonContext';
import { PageContext } from 'context/PageContext';

export default function PokedexPage() {
  const [pokemons, setpokemons] = React.useState([]);
  const [selectedPokemon, setSelectedPokemon] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);

  const fetchPokemonList = async page => {
    const pokemonList = await getPokemons(page * 20);
    setpokemons(pokemonList.results);
  };

  React.useEffect(() => {
    if (pageNumber < 0) {
      setPageNumber(0);
    }
  }, [pageNumber]);

  React.useEffect(() => {
    fetchPokemonList(pageNumber);
  }, [pageNumber]);

  return (
    <Flex
      className="bg"
      justify="center"
      p="2.5rem"
      h="100%"
      overflowX="hidden"
    >
      <SelectedPokemonContext.Provider
        value={{ selectedPokemon, setSelectedPokemon }}
      >
        <Flex>{selectedPokemon.url && <PokeDex />}</Flex>
        <PageContext.Provider value={{ pageNumber, setPageNumber }}>
          <PokeList pokemons={pokemons} />
        </PageContext.Provider>
      </SelectedPokemonContext.Provider>
    </Flex>
  );
}
