import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name] : value
    });
    // if (event.target.name === "username"){
    //   this.setState({
    //     username: event.target.value
    //   });
    // } else if (event.target.name === "password"){
    //   this.setState({
    //     password: event.target.value
    //   });
    // }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    if (password && username){
      this.props.onSubmit({username, password});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" value={this.state.username} onChange={this.handleInputChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" value={this.state.password} onChange={this.handleInputChange} type="password" />
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
  onSubmit: PropTypes.func
};

export default LoginForm;
