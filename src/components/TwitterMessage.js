import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  changeMessage = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.message}
          onChange={this.changeMessage}/>
          <div>
            {this.props.maxChars - this.state.message.length} characters left
          </div>
      </div>


    );
  }
}

export default TwitterMessage;
