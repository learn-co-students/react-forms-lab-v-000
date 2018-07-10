import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cntChars: this.props.maxChars,
      maxChars: this.props.maxChars,
      valChars: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({
      valChars: event.target.value,
      cntChars: this.state.cntChars - 1
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.valChars}
          onChange={this.handleChange}
        />
        <p>{this.state.cntChars} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
