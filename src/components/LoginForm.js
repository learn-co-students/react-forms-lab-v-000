import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    let {name, value} = event.target;
    
    this.setState({
      [name]: value,
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    let {username, password} = this.state

    if(!username || !password) {
      return;
    }
    this.props.onSubmit({username, password})
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username  
            <input id="test-username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.PropTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;
