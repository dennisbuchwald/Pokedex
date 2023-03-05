import React from "react";
import "./Button.css";

export function Button(props) {
	return (
		<div className="buttons">
			<button className="button btn-prev" onClick={props.handlePrevClick}>
				&lt;
			</button>
			<button className="button btn-next" onClick={props.handleNextClick}>
				&gt;
			</button>
		</div>
	);
}

export default Button;
