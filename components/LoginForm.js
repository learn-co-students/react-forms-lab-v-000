import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.username = this.username.bind(this);
    this.password = this.password.bind(this);
    this.submit = this.submit.bind(this);
  }

  username(e){
    this.setState({
      username: e.target.value
    })
  }

  password(e){
    this.setState({
      password: e.target.value
    })
  }

  submit(e){
    e.preventDefault();
    const {username, password} = this.state

    if (!username || !password) {
      return null
    }
    this.props.onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input  id="test-username" type="text" value={this.state.username} onChange={this.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input  id="test-password" type="password" value={this.state.password} onChange={this.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
