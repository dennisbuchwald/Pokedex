import React, { useState, useEffect } from "react";
import "./Display.css";
import Pokemon from "../Pokemon/Pokemon.js";
import fetchPokemon from "../Pokemon/api.js";

export function Display(props) {
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const data = await fetchPokemon(props.searchPokemon);
			setPokemon(data);
		}
		fetchData();
	}, [props.searchPokemon]);

	if (!pokemon) return <div>Loading...</div>;

	return (
		<div className="display">
			<div className="pokemon-container">
				<Pokemon pokemon={pokemon} />
			</div>
		</div>
	);
}

export default Display;
