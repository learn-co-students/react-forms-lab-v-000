import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      chars: "",
    };

  }

  handleChange = (event) =>{
    this.setState({
      chars: event.target.value,
      })
    }

  render() {
    return (
      <div>
        <strong>You Have {this.props.maxChars - this.state.chars.length} Characters Remaining</strong>
        <input
          type="text"
          value={this.state.chars}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
