import React from 'react';
import { Flex } from '@chakra-ui/react';
import Header from './Header';
import Body from './Body/Body';
import PokemonDetail from '../PokemonDetail';

export default function PokeDex({ id }) {
  return (
    <Flex
      flexDir="column"
      position="relative"
      w="800px"
      p="20px 0"
      border="4px"
      borderTopLeftRadius="8px"
      borderBottomLeftRadius="8px"
      borderColor="black"
      style={{
        background: 'var(--main-bg-color)',
      }}
    >
      <Header />
      <Body>
        <PokemonDetail id={id} />
      </Body>
    </Flex>
  );
}
