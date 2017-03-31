const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      username: ''
    };

    this.updateFields = this.updateFields.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFields(event) {
    const target = event.target;
    const name = target.id.split("-")[1];
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const username = this.state.username;
    const password = this.state.password;

    event.preventDefault();

    if(username.length > 0 && password.length > 0){
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" onChange={this.updateFields} value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange={this.updateFields} value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button onClick={this.handleSubmit} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
}

module.exports = LoginForm;
