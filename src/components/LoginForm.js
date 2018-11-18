import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  inputChange = e => this.setState({[e.target.id]: e.target.value});

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event=>{this.handleSubmit(event)}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange = {event => this.inputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange = {event => this.inputChange(event)}
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
