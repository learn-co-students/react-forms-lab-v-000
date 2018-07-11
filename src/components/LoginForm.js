import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    if( !!this.state.username.trim() && !!this.state.password.trim() ){
      this.props.onSubmit(this.state)
    }
  }
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} 
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {

}

export default LoginForm;
