import React from 'react';

class LoginForm extends React.Component {
    constructor() {
        super();

        this.state = {username:'', password:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e){
        if (e.target.name === "username") {
            this.setState({username: e.target.value})
        } else {
            this.setState({password: e.target.value})
        }
        }
    
    handleSubmit(e){
        e.preventDefault();
        if (!(this.state.username === '' || this.state.password === '')){
            this.props.onSubmit([this.state.username, this.state.password])
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                        <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInput} />
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInput} />
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
