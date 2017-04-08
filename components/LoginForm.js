import React from 'react';

class LoginForm extends React.Component {
 constructor() {
   super();

   this.state = {
     username: '',
     password: '',
   };
 }

 handleUsernameChange(event) {
   this.setState({
     username: event.target.value
   });
 }

 handlePasswordChange(event) {
   this.setState({
     password: event.target.value
   });
 }

 handleFormSubmit(ev) {
   ev.preventDefault();
   const { username, password } = this.state;
   if (!username || !password) {
     return;
   }

   this.props.onSubmit({
     username,
     password
   });
 }

 render() {
   return (
     <form onSubmit={this.handleFormSubmit.bind(this)}>
       <div>
         <label>
           Username
           <input id="username" type="text" value={this.state.username}
             onChange={this.handleUsernameChange.bind(this)} />
         </label>
       </div>
       <div>
         <label>
           Password
           <input id="password" type="password" value={this.state.password}
             onChange={this.handlePasswordChange.bind(this)} />
         </label>
       </div>
       <div>
         <button type="submit">Log in</button>
       </div>
     </form>
   );
 }
}

module.exports = LoginForm
