import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmission = (event) => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;

    if (username && password){
      this.props.onSubmit({username, password});
    } else {
      alert("YOU NEED BOTH USERNAME AND PASSWORD!")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleChange} name="username" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleChange} name="password" value={this.state.password} />
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
