import React from 'react'

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {username: '', password: '',}

    this.change = this.change.bind(this)
    this.submit = this.submit.bind(this)
  }

  change(field, event) {
    this.setState({
      [field]: event.target.value,
    })
  }

  submit(event) {
    event.preventDefault()
    const {username, password} = this.state;

    if (!username || !password) {
      return
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
            <input id="test-username" type="text" value={this.state.username} onChange={this.change.bind(this, 'username')} />
        </div>

        <div>
            <input id="test-password" type="password" value={this.state.password} onChange={this.change.bind(this, 'password')} />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func,
}

export default LoginForm
