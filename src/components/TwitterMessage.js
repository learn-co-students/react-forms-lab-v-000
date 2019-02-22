import React from "react";


class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      post: ''
    };
  }

  handleChange = event => {
    this.setState({
      post: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.post}
          onChange={this.handleChange}
        />
        {this.props.maxChars - this.state.post.length}
      </div>
    );
  }
}

export default TwitterMessage;
