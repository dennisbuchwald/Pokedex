import React, { useState } from "react";
import "./Button.css";

import buttonSound from "./button-sound-2.mp3";

export function Button({
	handlePrevClick,
	handleNextClick,
	handleShinyMode,
	isShiny,
}) {
	const [active, setActive] = useState(false);

	return (
		<div className="buttons">
			<div className="top-buttons">
				<button
					className="button btn-prev"
					onClick={() => {
						handlePrevClick();
						new Audio(buttonSound).play();
					}}
				>
					Vorheriges Pokemon
				</button>
				<button
					className="button btn-next"
					onClick={() => {
						handleNextClick();
						new Audio(buttonSound).play();
					}}
				>
					Nächstes Pokemon
				</button>
			</div>
			<div className="bottom-buttons">
				<button
					className={`button shiny ${isShiny && active ? "active" : ""}`}
					onClick={() => {
						handleShinyMode();
						setActive(true);
						new Audio(buttonSound).play();
					}}
				>
					Shiny Mode
				</button>
				<button
					className="button info"
					disabled="disabled"
					onClick={() => {
						new Audio(buttonSound).play();
					}}
					// Button funktioniert aktelll nicht. 
				>
					Info
				</button>
			</div>
		</div>
	);
}

export default Button;
