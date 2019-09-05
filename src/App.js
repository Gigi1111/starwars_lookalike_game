import React from 'react';
import './App.css';
import InputForm from './components/input-form.component';
function App() {
	return (
		<div className="App">
			<div className="header">
				<img
					className="title"
					src="https://i.ibb.co/qn1hWcz/star-wars-episode-7-release-date21.jpg"
					alt="star-wars-episode-7-release-date21"
					border="0"
				/>
				<img
					className="subtitle"
					src="https://fontmeme.com/permalink/190905/0219fa2d64421e681d4ca74e5ad868bb.png"
					alt="star-wars-font"
					border="0"
				/>
			</div>

			<InputForm />
		</div>
	);
}

export default App;
//			<a href="https://fontmeme.com/star-wars-font/">
