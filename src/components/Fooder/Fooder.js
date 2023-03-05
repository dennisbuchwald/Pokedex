import React from "react";
import "./Fooder.css";

export function Fooder(props) {
	return (
		<footer class="footer-container">
			<p class="version">Version: {props.version}</p>
			<p class="developer">Entwickler: {props.developer}</p>
			<p class="date">Datum: {props.date}</p>
		</footer>
	);
}

export default Fooder;
