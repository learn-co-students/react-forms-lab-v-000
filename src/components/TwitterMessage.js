import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }
  remainingChars = () => {
    return this.props.maxChars-this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}/><br/>
        <em>{this.remainingChars()}</em>
      </div>
    );
  }
}

export default TwitterMessage;

//
//   handleChange = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     })
//   }
//

//

//
// export default TwitterMessage;
