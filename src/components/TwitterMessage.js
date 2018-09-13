import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      chars: event.target.value
    })
  }

  howManyLeft = () => {
    return parseInt(this.props.maxChars - this.state.chars.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>Characters Left: {this.howManyLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
