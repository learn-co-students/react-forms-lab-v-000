import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  numOfCharsLeft = () => {
    return this.props.maxChars - this.state.message.length
  }





  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
         value={this.state.message}
         onChange={event => this.handleChange(event)}
         name="message"
         id="message"
         />
         <div>
        {this.numOfCharsLeft()}
        </div>
      </div>
    );
  }
}


export default TwitterMessage;
