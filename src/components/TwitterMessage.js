import React from 'react';

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charactersLeft: props.maxChars
    };
  }

  handleChange = event => {
    console.log(this.state.charactersLeft)
    if (this.state.charactersLeft != 0) {
      this.setState({
        value: event.target.value,
        charactersLeft: this.state.charactersLeft - 1
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value}/>
        {this.state.charactersLeft}
      </div>
    );
  }
}

export default TwitterMessage;
