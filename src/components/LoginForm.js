import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.value
    }, ()=> console.log(target))
  }

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) 
    return 
    this.props.onSubmit(this.state);
    console.log(this.state);
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={event => this.handleChange(event)} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"  onChange={event => this.handleChange(event)} value={this.state.password}/>
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
