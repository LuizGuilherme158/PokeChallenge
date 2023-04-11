import React from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useSelector } from 'react-redux';
import { Flex, Box, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/reducer/FavoritesSlice';
import { SelectedPokemonContext } from 'context/SelectedPokemonContext';
import Hamburguer from './Hamburguer';

export default function Body({ children }) {
  const favorites = useSelector(state => state.favorites);
  const { selectedPokemon } = React.useContext(SelectedPokemonContext);
  const [storedFavorites, setStoredFavorites] = useLocalStorage(
    'favorites',
    []
  );
  const dispatch = useDispatch();

  console.log(storedFavorites);

  React.useEffect(() => {
    // Sync favorites with local storage
    setStoredFavorites(favorites);
  }, [favorites, setStoredFavorites]);

  const handleAddFavorite = selectedPokemon => {
    dispatch(addFavorite(selectedPokemon));
  };

  const handleRemove = selectedPokemon => {
    dispatch(removeFavorite(selectedPokemon));
  };

  return (
    <Flex h="100%">
      <Box
        bg="white"
        h="100%"
        w="100%"
        m="0 20px"
        p="0 80px"
        borderRadius="8px"
        borderBottomLeftRadius="8px"
        border="4px"
        borderColor="black"
      >
        <Flex flexDir="column" h="100%"
        >
          <Flex justify="center" alignItems="center" p="15px 0"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '15px 0',
            }}
          >
            <Box border="4px" borderColor="black" borderRadius="full" bg='var(--secondary-light-color)' w="20px" h="20px" mr="20px"
            />
            <Box border="4px" borderColor="black" borderRadius="full" bg='var(--secondary-light-color)' w="20px" h="20px"/>
          </Flex>

          {/* CONTENT */}
          <Box position="relative" borderRadius="8px" border="4px" borderColor="black" height="100%" width="100%"
            className="bg"
          >
            {children}
          </Box>

          <Flex justify="space-between" alignItems="center" padding="10px 10px">
            <Flex alignItems="center">
              <Button
                border="2px"
                borderColor="black"
                bg="white"
                ml="2"
                p="2"
                w="auto"
                onClick={() => {
                  if (favorites.find(c => c.url === selectedPokemon.url)) {
                    handleRemove({
                      url: selectedPokemon?.url,
                      name: selectedPokemon.name,
                    });
                  } else {
                    handleAddFavorite({
                      url: selectedPokemon?.url,
                      name: selectedPokemon.name,
                    });
                  }
                }}
              >
                <Box
                  border="4px"
                  borderColor="black"
                  borderRadius="full"
                  bg="var(--fourth-light-color)"
                  minW="30px"
                  minH="30px"
                />
                &nbsp;
                {favorites.find(c => c.url === selectedPokemon.url)
                  ? 'Unfavorite'
                  : 'Favorite'}
              </Button>
            </Flex>
            <Hamburguer />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
