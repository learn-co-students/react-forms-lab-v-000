import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  changeText = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  counter = () => {
    return (this.props.maxChars - this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
         onChange={this.changeText}
         value={this.state.value} />
        <p>{this.counter()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
