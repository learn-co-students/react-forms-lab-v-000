import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {username: "", password: ""};
  }
  handleChange(event) {
    this.setState({name: event.target.value});
  }
  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {onSubmit = PropTypes.func,}
export default LoginForm;
