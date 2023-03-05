import React from "react";
import "./Button.css";

export function Button({ handlePrevClick, handleNextClick }) {
	return (
		<div className="buttons">
			<button className="button btn-prev" onClick={handlePrevClick}>
				Prev &lt;
			</button>
			<button className="button btn-next" onClick={handleNextClick}>
				Next &gt;
			</button>
		</div>
	);
}

export default Button;
