import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remaining: this.props.maxChars,
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      remaining: this.state.remaining - 1,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <p>{this.state.remaining} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
