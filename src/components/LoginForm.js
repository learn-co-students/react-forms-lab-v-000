import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.onChangeHandlerUser = this.onChangeHandlerUser.bind(this);
    this.onChangeHandlerPass = this.onChangeHandlerPass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeHandlerUser(e){
    let newValue = e.target.value
    this.setState({
      username: newValue
    })
  }
  onChangeHandlerPass(e){
    let newValue = e.target.value
    this.setState({
      password: newValue
    })
  }
  handleSubmit(e){
    e.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
            id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.onChangeHandlerUser} />

          </label>
        </div>
        {this.state.username}
        <div>
          <label>
            Password
            <input
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChangeHandlerPass}/>

          </label>
        </div>
        {this.state.password}
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
