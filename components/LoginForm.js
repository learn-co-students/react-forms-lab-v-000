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
    // const {username, password} = this.state;
    // or
    if (!this.state.username || !this.state.password){
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
            <input value={this.state.username} id="test-username" type="text" onChange={this.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} id="test-password" type="password" onChange={this.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
