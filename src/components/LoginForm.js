import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    let stateAttr = event.target.name;
    let stateVal = event.target.value;

    this.setState({
      [stateAttr]: stateVal
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.username !== '' && this.state.password !== '') {
       this.props.onSubmit(this.state);
    }
   
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
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
