import React from "react";

class TwittertweetContent extends React.Component {
  constructor() {
    super();

    this.state = {
      tweetContent: ''
    };
  }
  handleOnChange = event => this.setState({tweetContent: event.target.value})
  render() {
    return (
      <div>
        <strong>Your tweetContent:</strong>
        <input type="text" onChange={this.handleOnChange} value={this.state.tweetContent}/>
        {this.props.maxChars-this.state.tweetContent.length}
      </div>
    );
  }
}

export default TwittertweetContent;
