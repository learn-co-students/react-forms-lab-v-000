import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charLeft: this.props.maxChars
    }
      ;
    };


  handleChange = event => {
    this.setState({
      value: event.target.value,
      charLeft: this.props.maxChars - event.target.value.length
    });

  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p> You have {this.state.charLeft} characters left. </p>
      </div>
    );
  }
}

export default TwitterMessage;
