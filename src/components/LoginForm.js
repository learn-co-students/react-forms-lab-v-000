import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleText = event => {this.setState({username: event.target.value})}

  handlePassword = event => {this.setState({password: event.target.value})}

  handleSubmit = event => {
    if(this.state.username && this.state.password) {
      this.props.onSubmit()
    }
    event.preventDefault()
  }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" onChange={this.handleText} type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange={this.handlePassword} type="password" value={this.state.password}/>
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


// Remember that you can retrieve the inpiut name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
