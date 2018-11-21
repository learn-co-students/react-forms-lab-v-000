import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState(
  //     {[event.target.name]: event.target.value}
  //   );
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          name="message"
          value={this.state.message}
          // onChange={this.handleChange}
          onChange={event => this.setState({message: event.target.value})}
        />
        <div>
          {this.props.maxChars - this.state.message.length} characters left
        </div>
      </div>
    );
  }
}

export default TwitterMessage;