import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
  }


  handleChange = event => {
  this.setState({
    value: event.target.value,
    // charactersLeft: this.props.maxChars - this.state.value.length
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
        // Characters Left: {this.state.charactersLeft}
        Characters Left: {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
