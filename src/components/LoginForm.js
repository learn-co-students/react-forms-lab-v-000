import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handleSubmit: this.props.handleLogin,
      username: '',
      password: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username !== '' && this.state.password !== '') {
      this.state.handleSubmit(this.state)
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form
        onSubmit={ (e) => this.handleSubmit(e) } >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              onChange={this.handleChange} />
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
