import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
      password: "",
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit(event) {
    if(this.state.text !== ""){
      this.props.onSubmit
    }
  }

  render() {

    var submitable = function(event){event.preventDefault();};
    if (this.state.text !== "" && this.state.password !== ""){
      submitable = this.props.onSubmit;
    }


    return (
      <form onSubmit={submitable}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              value={this.state.text}
              onChange={this.handleTextChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;
