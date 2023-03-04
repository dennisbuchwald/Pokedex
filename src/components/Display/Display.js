import React from "react";
import "./Display.css";
import Pokemon from "../Pokemon/Pokemon.js";

export function Display() {
	return (
		<div className="display">
			<div className="pokemon-container">
				<Pokemon name="pikachu" />
			</div>
		</div>
	);
}

export default Display;
