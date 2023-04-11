import React from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import { getPokemonDetail, getPokemonSpeciesDetail } from 'api';
import { SelectedPokemonContext } from 'context/SelectedPokemonContext';

export default function PokemonDetail(props) {
  const { selectedPokemon } = React.useContext(SelectedPokemonContext);
  const [id, setId] = React.useState();

  const [detail, setdetail] = React.useState();
  const [speciesDetail, setspeciesDetail] = React.useState();
  const [flavorText, setflavorText] = React.useState();

  const fetchPokemonDetail = async url => {
    const _id = url
      .replace('https://pokeapi.co/api/v2/pokemon/', '')
      .replace('/', '');
    setId(_id);
    const _detail = await getPokemonDetail(_id);
    const _speciesDetail = await getPokemonSpeciesDetail(_id);
    const sanitizedEnglishFlavor =
      _speciesDetail?.flavor_text_entries
        ?.find(el => el.language.name === 'en')
        ?.flavor_text.replace('\n', ' ')
        .replace('\f', ' ') || 'No POKéMON information';
    setflavorText(sanitizedEnglishFlavor);
    setdetail(_detail);
    setspeciesDetail(_speciesDetail);
  };

  React.useEffect(() => {
    fetchPokemonDetail(selectedPokemon.url);
  }, [selectedPokemon]);

  return (
    <Flex h="100%" py="2">
      <Flex
        flexDirection="column"
        p="2"
        w="100%"
        h="100%"
        justify="center"
        className="crt crt-txt"
      >
        <Flex justify="space-between">
          <Box w="fit-content">
            <Flex
              alignSelf="center"
              w="fit-content"
              m="1"
              p="1"
              border="1px"
              borderRadius="lg"
              borderColor="White"
            >
              <img
                alt="Pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
              />
            </Flex>
            <Flex justifyContent="center">
              {speciesDetail?.names && (
                <RandomText
                  source={speciesDetail?.names}
                  sourcekey="name"
                  className="self-center flex text-center"
                />
              )}
            </Flex>
          </Box>

          <Flex height="100%" alignSelf="center" maxW="400px">
            <span>{flavorText}</span>
          </Flex>
        </Flex>
        <TypeList types={detail?.types} />
        <Box border="1px" borderRadius="8px" my="2" w="100%">
          <Text
            textAlign="center"
            borderBottom="1px"
            borderColor="white"
            px="2"
          >
            species_information
          </Text>
          <Box p="1">
            <Flex justify="space-between">
              <span>genera</span>
              {speciesDetail?.genera && (
                <RandomText
                  source={speciesDetail?.genera}
                  sourcekey="genus"
                  className=""
                />
              )}
            </Flex>
            <Flex justify="space-between">
              <span className="mr-3">has_gender_differences</span>
              {'  '}
              <span>{speciesDetail?.has_gender_differences + ''}</span>
            </Flex>
            <Flex justify="space-between">
              <span>hatch_counter</span>
              <span>{speciesDetail?.hatch_counter}</span>
            </Flex>
            <Flex justify="space-between">
              <span>is_baby</span>
              <span>{speciesDetail?.is_baby + ''}</span>
            </Flex>
            <Flex justify="space-between">
              <span>is_legendary</span>
              <span>{speciesDetail?.is_legendary + ''}</span>
            </Flex>
            <Flex justify="space-between">
              <span>is_mythical</span>
              <span>{speciesDetail?.is_mythical + ''}</span>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}

// helper components

function TypeList(props) {
  if (!props.types) return null;
  return (
    <Flex justify="center" my="1" flexWrap="wrap">
      {props.types.map((type, i) => (
        <Text
          border="2px"
          borderRadius="8px"
          m="1"
          px="2"
          key={i}
          style={{
            borderColor: TYPE_COLOR[type.type.name],
          }}
          className="border-2 rounded px-2 m-1"
        >
          {type.type.name}
        </Text>
      ))}
    </Flex>
  );
}

function RandomText(props) {
  if (props.source === undefined) <div></div>;
  const [text, settext] = React.useState();
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  React.useEffect(() => {
    if (props.source === undefined) return;
    const intervalSpeed = 1000 + Math.random() * 100;
    const interval = setInterval(() => {
      settext(
        props.source[getRandomInt(0, props.source?.length || 0)][
          props.sourcekey
        ]
      );
    }, intervalSpeed);
    return () => clearInterval(interval);
  }, [props.source, props.sourcekey]);
  return <div {...props}>{text}</div>;
}

// helper constants

const TYPE_COLOR = {
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  unknown: '#68A090',
  shadow: '#ffffff',
};
