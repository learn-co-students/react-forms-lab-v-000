import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    if (!this.state.username || ! this.state.password ) return;
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit() }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} />
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
