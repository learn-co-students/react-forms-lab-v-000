import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  updateChange = (event) => {
    this.setState({

      value: event.target.value,

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars - this.state.value.length}
        <input value={this.state.value} onChange={this.updateChange} type="text" />
      </div>
    );
  }
}

export default TwitterMessage;
