async function fetchPokemon(pokemon) {
	let url;
	if (!isNaN(pokemon)) {
		// If pokemon is a number, use its number in the URL
		url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
	} else {
		// If pokemon is a string, use its name in the URL
		url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
	}

	const response = await fetch(url);
	const data = await response.json();
	return data;
}

export default fetchPokemon;
