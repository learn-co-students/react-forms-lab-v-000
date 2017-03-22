import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      charValue: ''
    };

    this.getCharacters = this.getCharacters.bind(this);
  }

  getCharacters(e) {
    debugger
    this.setState({
      charValue: e.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>
          <b>Remaining Characters</b>:
            {this.props.maxChars - this.state.charValue.length}
        </p>

        <input
          type="text"
          value={this.state.charValue}
          onChange={this.getCharacters}
        />
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number.isRequired
}

module.exports = TwitterMessage;
