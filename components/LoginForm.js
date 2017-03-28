const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
      onSubmit:  (name, password) =>{
      }
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" />
          </label>
        </div>

        <div>
          <label>
            Password
            <input id="test-password" type="password" />
          </label>
        </div>

        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
