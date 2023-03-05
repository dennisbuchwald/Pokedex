import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display/Display.js";
import { Button } from "./components/Button/Button.js";
import { Fooder } from "./components/Fooder/Fooder.js";

function App() {
	const version = "0.2.3";
	const developer = "Dennis Buchwald";
	const date = "5. März 2023";

	const [number, setNumber] = useState(151);

	const handlePrevClick = () => {
		setNumber((prevNumber) => Math.max(1, prevNumber - 1));
	};

	const handleNextClick = () => {
		setNumber((prevNumber) => Math.min(151, prevNumber + 1));
	};

	// mit Math.min und Math.max wurde begrenzt dass ich nur die Kanto (ersten 150 Pokemon) anzeige

	return (
		<>
			<div className="App">
				<body className="App-header">
					<Display number={number} />
					<Button
						handlePrevClick={handlePrevClick}
						handleNextClick={handleNextClick}
					/>
				</body>
				<Fooder version={version} developer={developer} date={date} />
			</div>
		</>
	);
}

export default App;
