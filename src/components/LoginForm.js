import React from 'react'



export default class LoginForm extends React.Component{
  constructor(){
    super();

    this.state = {
      username: '',
      password: '', 
    }
  }

  handleInputChange = event => {
    console.log(event.target)
      const { name, value } = event.target;

      this.setState({
        [name]: value
      });
    }

  handleSubmit = (event) => {
    event.preventDefault()

    const {username, password} = this.state

    if (!username || !password){
      return
    }

    this.props.onSubmit({username, password})
  }

  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
      <label>Username</label> <br/>
        <input id="test-username"
        type="text"
        name="username"
        value={this.state.username}
        onChange={this.handleInputChange} />
      <br/>
      <label>Password</label> <br/>
        <input id="test-password"
        type="password"
        name="password"
        value={this.state.password} onChange={this.handleInputChange} />
        <br/><br/>
        <input type="submit" value="submit"/>
      </form>
    )
  }
}
