import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: '',
      submitTo: props.onSubmit
    };
  }

    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // const name = target.name;

    // this.setState({
    //   [name]: value
    // });

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
