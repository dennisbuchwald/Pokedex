import "./App.css";
import { useState } from "react";
import { Display } from "./components/Display/Display.js";
import { Button } from "./components/Button/Button.js";
import { Fooder } from "./components/Fooder/Fooder.js";

function App() {
	const version = "0.2.4";
	const developer = "Dennis Buchwald";
	const date = "5. März 2023";

	const [isShiny, setIsShiny] = useState(false);
	const [number, setNumber] = useState(6);

	const handlePrevClick = () => {
		setNumber((prevNumber) => Math.max(1, prevNumber - 1));
	};

	const handleNextClick = () => {
		setNumber((prevNumber) => Math.min(151, prevNumber + 1));
	};

	const handleShinyMode = () => {
		setIsShiny(!isShiny);
	};

	return (
		<>
			<div className="App">
				<body className="App-header">
					<Display number={number} isShiny={isShiny} />
					<Button
						handlePrevClick={handlePrevClick}
						handleNextClick={handleNextClick}
						handleShinyMode={handleShinyMode}
						isShiny={isShiny}
					/>
				</body>
				<Fooder version={version} developer={developer} date={date} />
			</div>
		</>
	);
}

export default App;
