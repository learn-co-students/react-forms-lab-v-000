import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username:"",
        password:""
    };
  }
  handleChange = (event)=>{
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  handleSubmit=(event)=>{
        event.preventDefault();
        let formData=[ this.state.username, this.state.password];
        if(this.state.username!=="" && this.state.password!==""){this.props.handleLogin(formData)}
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" name="username" 
            type="text" 
            onChange={this.handleChange}
            value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" name="password" 
            type="password" 
            onChange={this.handleChange}
            value={this.state.password}
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
