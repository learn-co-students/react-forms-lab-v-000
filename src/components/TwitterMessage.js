import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: "", maxChars: this.props.maxChars};
  }

  handleChange = event => {
    this.setState({
        value: event.target.value,
      });
  }

  countChars = () => {
    return this.state.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
          <p>Characters Remaining: {this.countChars()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
