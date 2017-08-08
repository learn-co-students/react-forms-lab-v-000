import React from 'react';

export default  class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

  }
  
setValue = event => {
  this.setState({
    value: event.target.value,
  });
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        value={this.state.value} 
        onChange={this.setValue} />
        <span>{this.props.maxChars - this.state.value.length}</span>
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