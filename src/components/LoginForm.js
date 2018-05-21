import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeListener = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  submit = (e) => {
    e.preventDefault();
    if (!!this.state.username && !!this.state.password) {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} name="username" onChange={this.changeListener} required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} name="password" onChange={this.changeListener} required />
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
