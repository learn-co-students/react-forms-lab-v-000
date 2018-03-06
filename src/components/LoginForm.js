import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       text: '',
       password: '',
     };
   }

   handleChange = (event) => {
     let name = event.target.name
     this.setState({
       [name]: event.target.value,
     })
   };

   handleSubmit = (event) => {
     event.preventDefault();
     if (this.state.text !== '' && this.state.password !== '') {
       this.props.onSubmit();
     }
   };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
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
