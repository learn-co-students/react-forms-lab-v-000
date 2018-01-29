import React from "react";




function checkInputsNotEmpty(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';
  if (props[propName]) {
    let value = props[propName];
    if (value === '') {
        return new Error(propName + ' in ' + componentName + " is empty");
    }
    return null;
  }
  // assume all ok
  return new Error(propName + 'is required');
}


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ''

    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value
    });

  }
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });

  }

onSubmit = event =>{
  event.preventDefault();
  this.props.onSubmit
}


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}


LoginForm.propTypes = {
  onSubmit: checkInputsNotEmpty
}

export default LoginForm;


// This component takes one prop, onSubmit, which is a function that gets called when the form is being submitted.
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary props to these inputs. Their values should be saved in the component's state.
// An example of an input would look like: js <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
// Remember that you can retrieve the inpiut name and value of an event.target from the JS event.
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
