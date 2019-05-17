import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {onSubmit: this.props.handleLogin,
					username: "",
					password: ""};
  }

	captureInput = (e) => {this.setState ({[e.target.name]: e.target.value }, console.log(this.state.username + ' ' + this.state.password))}
	
	submitForm = (e) => {
			const uid = this.state.username
			const password = this.state.password

			e.preventDefault()
			if (password && uid) {
				this.state.onSubmit(uid, password)
			}
		}
	
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.captureInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.captureInput} />
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
