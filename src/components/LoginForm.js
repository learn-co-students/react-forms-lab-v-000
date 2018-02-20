import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }
  
  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  
 handleSubmit = event => {
    
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="test-username" 
            type="text"
            value={this.state.value}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="test-password" 
            type="password" 
            value={this.state.value}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" value="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
