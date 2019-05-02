import React from 'react';

class LoginForm extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};
	}

	usernameChangeHandler = (event) => {
		this.setState({
			username: event.target.value
		});
	};

	passwordChangeHandler = (event) => {
		this.setState({
			password: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.username != '' && this.state.password != '') {
			this.props.handleLogin(this.state.username, this.state.password);
		}
	};

	render() {
		return (
			<form onSubmit={(event) => this.handleSubmit(event)}>
				<div>
					<label>
						Username
						<input
							id="username"
							value={this.state.username}
							onChange={this.usernameChangeHandler}
							name="username"
							type="text"
						/>
					</label>
				</div>
				<div>
					<label>
						Password
						<input
							id="password"
							value={this.state.password}
							onChange={this.passwordChangeHandler}
							name="password"
							type="password"
						/>
					</label>
				</div>
				<div>
					<button type="submit">Log in</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;
