import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: '',
      remainingChars: 140
    };
  }

  handleInputChange = (e) => {
    this.setState({
      remainingChars: this.state.remainingChars - e.target.value.length,
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={e => this.handleInputChange(e)} value={this.state.message}/>
        <p>Remaining Characters: {this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
