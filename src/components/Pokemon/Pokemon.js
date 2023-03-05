import React, { useState, useEffect } from "react";
import fetchPokemon from "./api.js";

function Pokemon(props) {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const data = await fetchPokemon(props.name);
			setPokemon(data);
		}
		fetchData();
	}, [props.name]);

	if (!pokemon) return <div>Loading...</div>;

	return (
		<div className="pokemon-container">
			<h2 className="pokemon-name">
				{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
			</h2>
			<img
				className="pokemon-image"
				src={pokemon.sprites.front_default}
				alt={pokemon.name}
			/>
		</div>
	);
}

export default Pokemon;
