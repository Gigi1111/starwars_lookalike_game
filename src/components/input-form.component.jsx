import React from 'react';
import './input-form.styles.scss';
import CustomButton from './custom-button.component';
import urls from '../url.data';
class InputForm extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			gender: 'male',
			height: 175,
			haircolor: 'none',
			loading: false,
			imgUrl: 'https://i.ibb.co/yYy9wQ2/19f.jpg'
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};
	handleButton = (e) => {
		e.preventDefault();
		const { name, gender, height, haircolor } = this.state;
		this.setState({
			loading: true
		});
		var h = 500;
		let i = 0;
		for (; i < 89; i++) {
			let url = 'https://swapi.co/api/people/' + i;

			fetch(url).then((response) => response.json()).then((obj) => {
				console.log(obj);

				if (obj.gender === gender) {
					if (obj.hair_color.includes(haircolor)) {
						//black,white,brown
						if (Math.abs(height - obj.height) <= h) {
							h = Math.abs(height - obj.height);
							this.setState({
								name: obj.name
							});

							urls.map((person) => {
								if (person.name.toLowerCase().trim() === obj.name.toLowerCase().trim()) {
									this.setState({
										imgUrl: person.url
									});
								}
							});
						}
					}
				}
			});
		}
	};

	handleRefresh = () => {
		this.setState({
			name: '',
			gender: 'male',
			height: 175,
			haircolor: 'none',
			loading: false,
			imgUrl: 'https://i.ibb.co/yYy9wQ2/19f.jpg'
		});
	};

	render() {
		const { imgUrl, name, height, loading } = this.state;
		return (
			<div className="Quiz">
				<div className={loading ? 'hide' : 'left'}>
					<form>
						<h2>Wanna know who yousa in starwars? Beam in yousa info.</h2>
						<label>gender</label>
						<select onChange={this.handleChange} name="gender">
							<option value="male">male</option>
							<option value="female">female</option>
						</select>

						<label>
							height: {parseFloat(height / 100).toFixed(2)}m /{' '}
							{Math.floor(parseFloat(height / (2.54 * 12)))}'{Math.floor(parseFloat((height / 2.54) % 12))}ft
						</label>
						<input type="range" id="start" name="height" min="0" max="300" onChange={this.handleChange} />
						<label>haircolor</label>
						<select onChange={this.handleChange} name="haircolor">
							<option value="none">none</option>
							<option value="black">black</option>
							<option value="white">white</option>
							<option value="grey">grey</option>
							<option value="green">green</option>
							<option value="red">red</option>
							<option value="brown">brown</option>
							<option value="blond">blonde</option>
							<option value="auburn">auburn</option>
						</select>
						<br />

						<CustomButton className="button" content="start match" handleButton={this.handleButton} />
					</form>
				</div>
				<div className={loading ? 'right width90' : 'right width48'}>
					<h2>You are ...{name}</h2>
					<div className="result" style={{ backgroundImage: `url(${imgUrl})` }} />
					{loading ? (
						<CustomButton className="button" content="try again" handleButton={this.handleRefresh} />
					) : (
						''
					)}
				</div>
			</div>
		);
	}
}

export default InputForm;
