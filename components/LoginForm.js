const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitIfFull = this.submitIfFull.bind(this);

    this.changeState = this.changeState.bind(this);

    this.state = {
      username: '',
      password: ''
    };
  }

  submitIfFull(event) {
    event.preventDefault();
  }

  changeState(event) {
    var key = event.target.id.split("-")[1]
    this.setState({
      key: event.target.value
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input onChange={this.changeState} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changeState} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button onClick={this.submitIfFull} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func
}

module.exports = LoginForm;
