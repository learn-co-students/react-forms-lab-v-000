import React from "react";

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState(
            {[name]: value},
        );
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
            <div>
            <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            </label>
            </div>
            <div>
            <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
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
