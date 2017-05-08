import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event)
    if(this.state.username === "" || this.state.password === ""){
      return
    }else{
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value
    const name = target.name
    this.setState({
     [name]: value
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
