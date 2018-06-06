import React from "react";
import PropTypes from "prop-types";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // changeUsername = (e) => {
  //   this.setState({
  //     ...this.state,
  //     username: e.target.value
  //   })
  // }

  // changePassword = (e) => {
  //   this.setState({
  //     ...this.state,
  //     password: e.target.value
  //   })
  // }

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    
    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
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
  onSubmit: PropTypes.func,
};

export default LoginForm;
