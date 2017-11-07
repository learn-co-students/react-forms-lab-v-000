import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxchars: 140
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      maxchars: (this.state.maxchars - 1)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxchars={this.state.maxchars} onChange={this.handleChange} value={this.state.value} />
        <p>MaxChars: {this.state.maxchars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
