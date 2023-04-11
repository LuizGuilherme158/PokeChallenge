import React from 'react';
import { Flex, Box, Center, Button, Link } from '@chakra-ui/react';

function App() {
  return (
    <Flex h="100%" className="bg crt crt-text">
      <Center w="100%">
        <Flex flexDir="column" alignItems="center" className="typewriter">
          <Box>
            <h1>Welcome to the PokeDex List with PokeAPI</h1>
          </Box>
          <Link href="/list" mt="10">
            <Button bg="black">Go to Pokedex</Button>
          </Link>
        </Flex>
      </Center>
    </Flex>
  );
}

export default App;
