import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      password: '',
    };
  }

  handleTxtChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

  handlePwChange = event => {
    this.setState({
      password: event.target.value,
    });
  }

  // Could replace both of the above with this: more abstract
  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   console.log(name);
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  formSubmission = event => {
    event.preventDefault();

    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  };

  render() {
    return (
      <form onSubmit={this.formSubmission}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.text} onChange={this.handleTxtChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePwChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
