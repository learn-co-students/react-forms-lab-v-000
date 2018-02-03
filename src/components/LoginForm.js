import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    let id = event.target.id;
    let val = event.target.value;

    if (id === 'test-username') {
      this.setState({
        username: val,
      })
    } else {
      this.setState({
        password: val,
      })
    }
  }

  handleSubmit = () => {
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit();
    }
  }

  render() {
    return (
      <form 
        onSubmit={this.props.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              value={this.state.username} 
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              value={this.state.password} 
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button 
            type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
