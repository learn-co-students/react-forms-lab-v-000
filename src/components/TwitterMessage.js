import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      initialMax: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      initialMax: this.props.maxChars - (this.state.value.length + 1),
      value : event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}/>
        <p>{this.state.initialMax} remaining Characters Left!</p>
      </div>
    );
  }
}


export default TwitterMessage;
