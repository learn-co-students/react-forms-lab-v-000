import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      lengthRemaining: this.props.maxChars
    }
  }



  postTweet = (event) => {
    const maxLength = this.props.maxChars
    this.setState({
      value: event.target.value,
      lengthRemaining: maxLength - event.target.length
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.postTweet}/>
        <strong>Characters Remaining:{this.state.lengthRemaining}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
