import React from 'react';
import { Flex, Box, Button } from '@chakra-ui/react';
import { PageContext } from 'context/PageContext';

export default function Pagination() {
  const { pageNumber, setPageNumber } = React.useContext(PageContext);

  return (
    <Box pt="6">
      <Flex alignItems="center" justify="space-between">
        {/* PAGE NUMBER */}
        <Flex
          bg="white"
          w="80px"
          justify="space-around"
          border="1px"
          borderRadius="md"
          borderColor="black"
        >
          <span>PG</span>
          <Box borderRight="1px" borderColor="black" />
          <span>{pageNumber + 1}</span>
        </Flex>
        {/* YELLOW LIGHT */}
        <div
          style={{
            border: '4px solid black',
            borderRadius: '999px',
            background: 'var(--third-light-color)',
            width: '30px',
            height: '30px',
          }}
        />
      </Flex>
      {/* PREVIOUS AND NEXT BUTTON */}
      <Flex justify="space-between" pt="6">
        <Button
          bg="black"
          w="100px"
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          previous
        </Button>
        <Button
          bg="black"
          w="100px"
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          next
        </Button>
      </Flex>
    </Box>
  );
}
