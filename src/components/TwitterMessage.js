import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      value: '',
      remainingChars: props.maxChars
    };
  }

  handleChange = event => {
      this.setState({
      remainingChars: this.props.maxChars - event.target.value.length,
      value: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>{this.state.remainingChars}</strong>
        <input type="text" value={this.state.value} 
        onChange={this.handleChange}  />
      </div>
    );
  }
}

export default TwitterMessage;
