import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
    });
  }

  calculateRemaining = () => {
    return this.props.maxChars - this.state.message.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <p>Remaining characters = {this.calculateRemaining()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
