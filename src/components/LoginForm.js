import React from "react";

class LoginForm extends React.Component {
  // This component takes one prop: onSubmit which is a function — this function is called when the
  // form is being submitted.
  // Make this a controlled component by adding the necessary attributes to these inputs. The input
  // values should be saved to the component's state, again on every change.
  // Remember that you can retrieve the input name and value of an event.target from the JS event.
  // Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
  // The onSubmit callback prop should only be called if both fields are filled in (with any value).

  // constructor() {
  //   super();
  //
  //   this.
    state = {
      username: '',
      password: ''
    };
  // }

  handleChange = event => { this.setState({ [event.target.name]: event.target.value }) }

  // handleUsernameChange = event => { this.setState({username: event.target.value}) }
  //
  // handlePasswordChange = event => { this.setState({password: event.target.value}) }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.username && this.state.password) this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>

          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
