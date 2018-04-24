import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      maxChars: this.props.maxChars
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    this.setState({
      tweet: event.target.value,
      maxChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.tweet}/>
        <p> Characters max: {this.props.maxChars} </p>
        <p> Characters remaining: {this.state.maxChars} </p>
      </div>
    );
  }
}

export default TwitterMessage;
