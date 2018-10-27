import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      counter: this.props.maxChars
    }
  }
  handleInputChange = (event) => {
    this.setState({
      content: event.target.value,
      counter: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleInputChange(event)} name="content" value={this.state.content}/>
        {this.state.counter}
      </div>
    );
  }
}

export default TwitterMessage;
