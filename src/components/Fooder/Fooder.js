import React from "react";
import "./Fooder.css";

export function Fooder(props) {
	return (
		<footer class="footer-container">
			<p class="version">
				Version:
				<br /> {props.version}
			</p>
			<p class="developer">
				Entwickler:
				<br /> {props.developer}
			</p>
			<p class="date">
				Datum:
				<br /> {props.date}
			</p>
		</footer>
	);
}

export default Fooder;
