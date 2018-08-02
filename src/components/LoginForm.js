import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }



  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitChange(e){

//debugger
    if(this.state.username !== "" && this.state.password !== ""){

    this.props.onSubmit(this.state)
  }
  e.preventDefault()
}

  render() {
    return (
      <form onSubmit={this.submitChange.bind(this)}>
        <div>
          <label>
            Username
            <input id="username"
             name="username"
             type="text"
            value={this.state.username}
            onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
             name="password"
             type="password"
             value={this.state.password}
             onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
