import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      maxChars:props.maxChars
    };
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    });
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}/>
        <p>{this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
