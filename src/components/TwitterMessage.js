import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };

  }

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
         <strong>Your message: {this.props.maxChars - this.state.message.length} </strong>
         <input
          type="text" 
          name="message" 
          onChange={this.handleChange}
          value = {this.state.message}
          id="message" />
        </form>
      </div>
    );
  }
}
