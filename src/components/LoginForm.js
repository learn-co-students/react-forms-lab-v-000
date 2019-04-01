import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
  this.setState({
     [event.target.name]: event.target.value,
  });
}

handleSubmit = event => {
  event.preventDefault()

  if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
}
// should call the prevent the default action when the form is being submitted
//       5) should call the `onSubmit` callback prop when the form is being submitted
//       6) should not call the `onSubmit` callback prop when the username and/or password fields are empty
//       7) should call the `onSubmit` callback prop when the form is being submitted
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value}
          onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value}
          onChange={this.handleChange}/>
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
