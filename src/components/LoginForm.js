import React from "react";

class LoginForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (event) =>{
debugger
    this.setState({
    username:  event.target.username,
    password: event.target.password,
  })
console.log( event.target)
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    debugger
    if(this.state.username !== '' && this.state.password !==''){
      this.props.onSubmit(this.state);
    }
  }


  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
