import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsernameChange}
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
              onChange={this.handlePasswordChange}
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


// 2. This component takes one prop, `onSubmit`, which is a function that gets called when the form is being submitted.
// 3. You'll find two inputs in this component: `<input type="text">` and `<input type="password">`.
//    Make this a controlled component by adding the necessary props to these inputs.
//    Their values should be saved in the component's state.
// 4. An example of an input would look like:
//    ```js
//    <input
//      id="test-username"
//      type="text"
//      name="username"
//      value={this.state.username}
//      onChange={this.handleInputChange}
//    />
//    ```
// 5. Remember that you can retrieve the inpiut `name` and `value` of an `event.target` from the JS event.
// 6. Add the necessary event handler to the `<form>` element in order to call the `onSubmit` callback prop.
// 7. The `onSubmit` callback prop should only be called if _both_ fields are filled in (with any value).
