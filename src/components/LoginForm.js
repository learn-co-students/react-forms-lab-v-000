import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleFormSubmission = (event) => {
    event.preventDefault();
    
    if (this.state.username.length && this.state.password.length) {
      this.props.onSubmit(this.state)
    }
    return
  }

  render() {
    return (
      <form onSubmit={event => this.handleFormSubmission(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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

{/*
// When rendered, the LoginForm component takes one prop, onSubmit, which is a function object (see App.js)
// — this function is called when the form is being submitted and just console.logs out a message with the username and password
// You'll find two inputs in the LoginForm component: <input type="text"> and <input type="password">.
// Make this a controlled component by adding the necessary attributes to these inputs
// The input values should be saved to the component's state, on every change.
// Retrieve the values of the inputs' name & value attributes from the JS event (event.target.name and event.target.value)
// The :username and :password keys in my state object match the 'username' and 'password' name attribute values of my <input>s
// so I can create ONE abstract arrow function callback method, handleInputChange, used when EITHER <input> changes
// An <input>'s name property value ('username' or 'password') will inform which part of the state needs to be updated (since changes are merged in the state object)
// Add the necessary event handler to the <form> element (onSubmit) in order to call the onSubmit callback prop passed from App parent component
// The onSubmit callback prop should ONLY be called if BOTH fields are filled in (with any value).
*/}