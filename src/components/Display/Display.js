import React from "react";
import "./Display.css";
import Pokemon from "../Pokemon/Pokemon.js";

export function Display(props) {
	return (
		<div className="display">
			<div className="pokemon-container">
				<Pokemon number={props.number} isShiny={props.isShiny} />
			</div>
		</div>
	);
}

export default Display;
