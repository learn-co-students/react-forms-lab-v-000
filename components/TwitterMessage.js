import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(event) => this.handleTextChange(event)} value={this.state.text}/>
        <p>Remaining Chars: {this.props.maxChars - this.state.text.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
};

TwitterMessage.defaultProps = {
  maxChars: 140
};
