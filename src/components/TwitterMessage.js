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
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.handleChange} 
        />
        <div>Remaining Characters: {this.props.maxChars - this.state.value.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
