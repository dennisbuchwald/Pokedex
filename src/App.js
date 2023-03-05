import { useState } from "react";
import "./App.css";
import { Display } from "./components/Display/Display.js";
import { Button } from "./components/Button/Button.js";
import { Footer } from "./components/Fooder/Fooder.js";

function App() {
	const version = "0.2.0";
	const developer = "Dennis Buchwald";
	const date = "4. März 2023";

	const [searchPokemon, setSearchPokemon] = useState(1);

	const handlePrevClick = () => {
		if (searchPokemon > 1) {
			setSearchPokemon(searchPokemon - 1);
		}
	};

	const handleNextClick = () => {
		setSearchPokemon(searchPokemon + 1);
	};

	return (
		<>
			<div className="App">
				<body className="App-header">
					<Display searchPokemon={searchPokemon} />
					<Button
						handlePrevClick={handlePrevClick}
						handleNextClick={handleNextClick}
					/>
				</body>
				<Footer version={version} developer={developer} date={date} />
			</div>
		</>
	);
}

export default App;
