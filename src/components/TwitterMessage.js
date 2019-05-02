import React from 'react';

class TwitterMessage extends React.Component {
	constructor() {
		super();

		this.state = {
			chars: ''
		};
	}

	inputChangeHandler = (event) => {
		this.setState({
			chars: event.target.value
		});
	};

	render() {
		return (
			<div>
				<strong>Your message:</strong>
				<input
					type="text"
					value={this.state.chars}
					onChange={this.inputChangeHandler}
					name="message"
					id="message"
				/>

				<p>Characters Left:{this.props.maxChars - this.state.chars.length}</p>
			</div>
		);
	}
}

export default TwitterMessage;
