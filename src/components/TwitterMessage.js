import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: ''
    };
  }

  changeChars = (event) => {
    this.setState({
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.chars} onChange={this.changeChars} />
        <br />
        <p>{this.props.maxChars - this.state.chars.length} characters remain</p>
      </div>
    );
  }
}

export default TwitterMessage;
