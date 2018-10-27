import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmitForm = (event) => {
    event.preventDefault();
    if(this.state.username && this.state.password) {
      this.props.onSubmit(this.state);  
    }
  }
  render() {
    return (
      <form onSubmit={event => this.handleSubmitForm(event)}>
        <div>
          <label>
            Username
            <input id="username" onChange={event => this.handleInputChange(event)} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={event => this.handleInputChange(event)} name="password" type="password" />
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
