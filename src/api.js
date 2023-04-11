/**
 * The API domain to be used based on the environment.
 * @constant
 * @type {string}
 */
export const domain =
  process.env.NODE_ENV === "production"
    ? "https://pokeapi.co/api/v2/"
    : "https://pokeapi.co/api/v2/";

/**
 * Custom fetch function for making requests to the PokeAPI.
 * @async
 * @param {string} route - The API route to fetch.
 * @param {object} [options={}] - Optional configuration for the fetch request.
 * @param {object} [options.body] - The request body.
 * @param {object} [options.conf] - Additional fetch configuration.
 * @param {object} [options.params] - Query parameters for the request.
 * @returns {Promise<object>} The response data as a JavaScript object.
 */
const customFetch = async (
  route,
  options = {}
) => {
  const { body, conf } = options;

  const searchQuery = "?" + new URLSearchParams(options.params).toString();

  const response = await fetch(domain + route + searchQuery, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    ...conf,
    body: body && JSON.stringify(body),
  });

  if (response.status !== 200) {
    const error = await response.text();
    if (process.env.NODE_ENV !== "production") {
      const w = window.open(undefined, "_blank");
      w.document.write(error);
    }
    return { error };
  }

  return await response.json();
};

/**
 * Fetches a list of Pokémon with pagination.
 * @async
 * @param {number} [offset=20] - The offset of the first Pokémon in the list.
 * @param {number} [limit=20] - The maximum number of Pokémon to fetch.
 * @returns {Promise<object>} The response data as a JavaScript object.
 */
export const getPokemons = async (
  offset = 20,
  limit = 20
) => {
  return await customFetch("pokemon", { params: { offset, limit } });
};

/**
 * Fetches details of a specific Pokémon by its ID.
 * @async
 * @param {number} id - The ID of the Pokémon to fetch details for.
 * @returns {Promise<object>} The Pokémon details as a JavaScript object.
 */
export const getPokemonDetail = async (id) => {
  return await customFetch(`pokemon/${id}`);
};

/**
 * Fetches species details of a specific Pokémon by its ID.
 * @async
 * @param {number} id - The ID of the Pokémon species to fetch details for.
 * @returns {Promise<object>} The Pokémon species details as a JavaScript object.
 */
export const getPokemonSpeciesDetail = async (
  id
) => {
  return await customFetch(`pokemon-species/${id}`);
};