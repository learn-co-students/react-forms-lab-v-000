import React from "react";
import PropTypes from "prop-types";
class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }
  handleChangeUser = (event) => {
    console.log(event.target.value)
    this.setState({username: event.target.value});
  }
  handleChangePassword = (event) => {
    console.log(event.target.value)
    this.setState({password: event.target.value});
  }
  handleFormSubmit = (event) => {
  event.preventDefault();
  if (!!this.state.username && !!this.state.password) {
    this.props.onSubmit(this.state);
  }

};
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChangeUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {onSubmit: PropTypes.func,}
export default LoginForm;
