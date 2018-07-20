import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      pass: "",
    };
  }

  handlePass = event => {
    this.setState({
      pass: event.target.value
    });
  }

  handleName = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    if(this.state.name !== "" && this.state.pass !== "") {
      this.props.onSubmit(this.state.name, this.state.pass)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.name} onChange={this.handleName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.pass} onChange={this.handlePass}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
