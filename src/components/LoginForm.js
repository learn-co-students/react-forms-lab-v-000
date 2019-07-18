import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }


  handleInputChange = event => {
        this.setState(
            {[event.target.name]: event.target.value}
        )
    }


  onSubmit = event => {
    event.preventDefault();
      ((this.state.username === '') || (this.state.password === '')) ? alert("Fields Cannot Be Empty") : this.props.handleLogin(this.state)
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} />
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
