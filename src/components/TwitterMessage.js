import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleCharacters = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleCharacters} value={this.state.value}/>
        <h3>Remaining Characters: {this.props.maxChars - this.state.value.length}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
