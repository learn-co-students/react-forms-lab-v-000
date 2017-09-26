import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };
    this.setValue = this.setValue.bind(this)
  }


  setValue(event) {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.setValue}/>
        <p>{this.props.maxChars - this.state.value.length}</p>
      </div>
    );
  }
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number,
}

TwitterMessage.defaultProps = {
  maxChars: 150,
}

export default TwitterMessage;
