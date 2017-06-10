import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      inputText: ""
    };

  }

  handleInputText(event) {
    this.setState({ inputText: event.target.value }); 
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               value={this.state.inputText}
               onChange={this.handleInputText.bind(this)} />
        <span>{this.props.maxChars - this.state.inputText.length}</span>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
};

TwitterMessage.defaultProps = {
  maxChars: 140,
};
