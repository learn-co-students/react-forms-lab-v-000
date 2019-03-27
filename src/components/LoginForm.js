import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

    handleChange = event => {
      this.setState({
        value: event.target.value,
      });
    }

    handleSubmit = event => {
      event.preventDefault()
    }


  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={this.state.value}
              onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.value}
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
