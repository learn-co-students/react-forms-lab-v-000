import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      charactersLeft: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" value={this.state.value} />
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
