import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      onSubmit: this.props.onSubmit
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event){
    if (event.target.id === 'test-username'){
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleOnSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    if ( !!this.state.username.trim() && !!this.state.password.trim() ){
      this.state.onSubmit();
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handleOnChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.handleOnSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
