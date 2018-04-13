import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <div>{parseInt(this.props.maxChars) - parseInt(this.state.value.length)} characters remaining</div>
      </div>
    );
  }
}

export default TwitterMessage;
