import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    //set initial value of state to empty strings
    this.state = {
      username: '',
      password: ''
    };
  }

  //update state w/every change of input
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value     //this will cover both username & password 
    })
  }

  //when submit is hit, prevent default & call Login if both username & password are present
  handleSubmit = event => {
    event.preventDefault() 
    if(this.state.username  && this.state.password )
      this.props.handleLogin(this.state)            //handleLogin() is function in the parent, app
    
  }
  

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>  {/*event listener when form is submitted*/}
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username}    //tie form value to state to make controlled
            onChange={this.handleChange}   //event listener for any input to username
            />
          </label>
        </div>
        <div>
          <label>
          Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password}    //tie form value to state to make controlled
            onChange={this.handleChange}   //event listener for any input to password
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
