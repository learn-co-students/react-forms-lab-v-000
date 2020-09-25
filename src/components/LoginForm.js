import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.username,
      password: props.password
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin({username, password})
    }else{
      console.log("Username and password must be specified")
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username"
                   name="username"
                   type="text"
                   value={this.state.username}
                   onChange={(e) => this.handleChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
                   name="password"
                   type="password"
                   value={this.state.password}
                   onChange={(e) => this.handleChange(e)}
            />
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
