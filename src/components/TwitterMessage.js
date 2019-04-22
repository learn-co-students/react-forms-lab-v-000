import React from "react";

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  //learning from the last lesson, we can use a dynamic State updating function
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={e => this.handleChange(e)}
          value={this.state.message}
        />
        <p>Characters Remaining:
          {this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

