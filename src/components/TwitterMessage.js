import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
      
    };
  }

  handleInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  remainingChars = () =>(
    this.props.maxChars - this.state.message.length
  )

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleInput} />
        <h4>{this.remainingChars()} characters left...</h4>
      
      </div>
    );
  }
}

export default TwitterMessage;
