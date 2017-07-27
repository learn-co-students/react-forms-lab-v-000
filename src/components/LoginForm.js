import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  handleInput(field, event) {
    this.setState({
      [field]: event.target.value,
    });

  }
  handleForm(event) {
    event.preventDefault();
    var username, password = this.state;
    if(!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.handleForm} >
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleInput.bind(this, "username")} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleInput.bind(this, "password")} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.Proptypes = {
  onSubmit: React.PropTypes.func
}

export default LoginForm;
