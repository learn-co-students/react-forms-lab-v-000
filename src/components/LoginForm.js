import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameInput = this.handleUsernameInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const name = this.state.username;
  //   const pass = this.state.password;
  //
  //   if (!!name && !!pass) {
  //     this.props.onSubmit({
  //       username: name,
  //       password: pass
  //     });
  //   }
  // };


  handleSubmit(event) {
    event.preventDefault();
    const username = this.username;
    const password = this.password;

    if (!username || !password) {
      return false;
    }

    this.props.onSubmit({
      username,
      password
    });

  }

  handleUsernameInput(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordInput(event) {
     this.setState({
       password: event.target.value,
     });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordInput}/>
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
  onSubmit: React.PropTypes.func,
};

export default LoginForm;
