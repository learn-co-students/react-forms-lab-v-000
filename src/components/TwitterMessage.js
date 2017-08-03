import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: ''
    };
  }

  updateChars = (e) => {
    this.setState({
      chars: e.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.chars} onChange={this.updateChars} />
        <span>{this.props.maxChars - this.state.chars.length} characters left</span>
      </div>
    );
  }
}

export default TwitterMessage;
