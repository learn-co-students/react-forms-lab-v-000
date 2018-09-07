// This component takes one prop: onSubmit which is a function — this function is called when the form is being submitted. 
// By default, this function is currently just includes console.log that will allow you to see if the form is functioning correctly when working in your browser.

// You'll find two inputs in this component: <input type="text"> and <input type="password">. 
// Make this a controlled component by adding the necessary attributes to these inputs. 
// The input values should be saved to the component's state, again on every change.
import React from "react";
class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePass = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.sendFormDataSomewhere(this.state)
    // should handle blank inputs... seems to automatically when submit prop is not passed in here. Why? auto pass to this.props.submit?
    if (this.state.username != "" && this.state.password != "") {
      this.props.onSubmit(event);
    }
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUser} value={this.state.username} required="true" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePass} value={this.state.password} required="true" />
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
